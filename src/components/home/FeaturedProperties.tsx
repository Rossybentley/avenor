import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import styles from "./FeaturedProperties.module.css";

export default function FeaturedProperties() {
  const [featured, ...others] = properties;

  return (
    <section
      id="properties"
      className={styles.section}
      aria-labelledby="properties-heading"
    >
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div>
            <span className="eyebrow">A considered collection</span>

            <h2 id="properties-heading" className={styles.heading}>
              Places with
              <br />
              <span>a point of view.</span>
            </h2>
          </div>

          <p className={styles.introCopy}>
            Not simply spaces to occupy, but places with a character of their
            own. Explore a selection of residential concepts that reflect our
            approach to architecture and everyday living.
          </p>
        </div>

        <div className={styles.collection}>
          <article className={styles.featured}>
            <Link
              href={`/properties/${featured.id}`}
              className={styles.imageLink}
              aria-label={`Explore ${featured.name}`}
            >
              <div className={styles.featuredImage}>
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 60vw"
                />

                <span className={styles.imageIndex}>01 / 03</span>
              </div>
            </Link>

            <div className={styles.featuredDetails}>
              <div>
                <span className={styles.location}>{featured.location}</span>

                <h3>{featured.name}</h3>

                <p>{featured.description}</p>
              </div>

              <span className={styles.bedrooms}>
                {featured.bedrooms} bedrooms
              </span>
            </div>
          </article>

          <div className={styles.secondaryProperties}>
            {others.map((property, index) => (
              <article key={property.id} className={styles.secondary}>
                <Link
                  href={`/properties/${property.id}`}
                  className={styles.secondaryImage}
                  aria-label={`Explore ${property.name}`}
                >
                  <Image
                    src={property.image}
                    alt={property.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, 35vw"
                  />

                  <span className={styles.imageIndex}>0{index + 2} / 03</span>
                </Link>

                <div className={styles.secondaryDetails}>
                  <span className={styles.location}>{property.location}</span>

                  <h3>{property.name}</h3>

                  <p>{property.description}</p>

                  <span className={styles.bedrooms}>
                    {property.bedrooms} bedrooms
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.bottomLine}>
          <span>AN INTRODUCTION TO THE AVENOR COLLECTION</span>

          <Link href="/properties" className={styles.viewAll}>
            View all properties <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <p className={styles.disclaimer}>
          These are illustrative concept properties created for the website
          design. They are not verified listings.
        </p>
      </div>
    </section>
  );
}
