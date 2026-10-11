import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import { properties } from "@/data/properties";
import styles from "@/components/properties/PropertyDetails.module.css";

type PropertyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.id === slug);
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Property not found",
    };
  }

  return {
    title: property.name,
    description: property.description,
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/properties">Properties</Link>
            <span aria-hidden="true">/</span>
            <span>{property.name}</span>
          </div>

          <header className={styles.introduction}>
            <div>
              <span className="eyebrow">{property.category}</span>

              <h1 className={styles.title}>{property.name}</h1>

              <p className={styles.location}>
                <span aria-hidden="true">↗</span>
                {property.location}
              </p>
            </div>

            <div className={styles.status}>
              <span className={styles.statusDot} />
              {property.status}
            </div>
          </header>

          <div className={styles.heroImage}>
            <Image
              src={property.image}
              alt={property.imageAlt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 90vw"
            />

            <span className={styles.imageCaption}>
              AVENOR / RESIDENTIAL COLLECTION
            </span>
          </div>

          <section className={styles.story}>
            <div className={styles.storyHeading}>
              <span className={styles.sectionNumber}>01 — THE PROPERTY</span>

              <h2>
                A home with
                <br />
                <em>its own character.</em>
              </h2>
            </div>

            <div className={styles.storyBody}>
              <p className={styles.description}>{property.description}</p>

              <p className={styles.disclaimer}>
                This is a concept property created to demonstrate the AVENOR
                experience. The property details and imagery are illustrative,
                not a verified listing.
              </p>

              <Link href="/properties" className={styles.textLink}>
                Return to the collection
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>

          <section
            className={styles.specifications}
            aria-labelledby="specifications-heading"
          >
            <div className={styles.specificationIntro}>
              <span className={styles.sectionNumber}>02 — AT A GLANCE</span>

              <h2 id="specifications-heading">The details.</h2>
            </div>

            <dl className={styles.specificationGrid}>
              <div className={styles.specification}>
                <dt>Location</dt>
                <dd>{property.location}</dd>
              </div>

              <div className={styles.specification}>
                <dt>Property type</dt>
                <dd>{property.category}</dd>
              </div>

              <div className={styles.specification}>
                <dt>Bedrooms</dt>
                <dd>{property.bedrooms}</dd>
              </div>

              <div className={styles.specification}>
                <dt>Listing status</dt>
                <dd>{property.status}</dd>
              </div>
            </dl>
          </section>

          <section className={styles.closing}>
            <span className={styles.sectionNumber}>THE AVENOR COLLECTION</span>

            <h2>
              Find a place
              <br />
              <em>that feels considered.</em>
            </h2>

            <Link href="/properties" className={styles.closingLink}>
              Explore the collection
              <span aria-hidden="true">↗</span>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
