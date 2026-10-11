"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { properties } from "@/data/properties";
import styles from "./PropertyCollection.module.css";

const categories = [
  "All properties",
  "Private residence",
  "Residential development",
  "Townhouse",
];

export default function PropertyCollection() {
  const [activeCategory, setActiveCategory] = useState("All properties");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");

  const filteredProperties = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const result = properties.filter((property) => {
      const matchesCategory =
        activeCategory === "All properties" ||
        property.category === activeCategory;

      const searchableText = [
        property.name,
        property.location,
        property.category,
        property.description,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "bedrooms") {
      result.sort((a, b) => b.bedrooms - a.bedrooms);
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.intro}>
          <div>
            <span className={styles.eyebrow}>
              AVENOR / THE PROPERTY COLLECTION
            </span>

            <h1 className={styles.title}>
              Spaces with
              <br />
              <em>something to say.</em>
            </h1>
          </div>

          <div className={styles.introText}>
            <p>
              A considered collection of residential concepts, shaped by
              location, architecture and the way people want to live.
            </p>

            <span className={styles.introNote}>
              CURRENTLY EXPLORING — LAGOS, NIGERIA
            </span>
          </div>
        </header>

        <section aria-label="Browse properties">
          <div className={styles.toolbar}>
            <div className={styles.toolbarTop}>
              <p className={styles.resultCount} aria-live="polite">
                <strong>
                  {String(filteredProperties.length).padStart(2, "0")}
                </strong>{" "}
                {filteredProperties.length === 1 ? "property" : "properties"}{" "}
                found
              </p>

              <div className={styles.sortControl}>
                <label htmlFor="property-sort">Sort by</label>

                <select
                  id="property-sort"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className={styles.sortSelect}
                >
                  <option value="recommended">Recommended</option>
                  <option value="name">Name: A–Z</option>
                  <option value="bedrooms">Most bedrooms</option>
                </select>
              </div>
            </div>

            <div className={styles.searchRow}>
              <label className={styles.searchBox}>
                <span className={styles.searchIcon} aria-hidden="true">
                  ⌕
                </span>

                <span className={styles.visuallyHidden}>
                  Search properties by name, location, or description
                </span>

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search by name, location or property type..."
                  className={styles.searchInput}
                />
              </label>

              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearch}
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </button>
              )}
            </div>

            <div
              className={styles.filters}
              aria-label="Filter by property type"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    className={`${styles.filterButton} ${
                      isActive ? styles.filterButtonActive : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.grid}>
            {filteredProperties.map((property, index) => (
              <article className={styles.card} key={property.id}>
                <Link
                  href={`/properties/${property.id}`}
                  className={styles.imageLink}
                  aria-label={`View ${property.name}`}
                >
                  <Image
                    src={property.image}
                    alt={property.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 680px"
                    className={styles.image}
                  />

                  <div className={styles.imageTopline}>
                    <span className={styles.status}>
                      <span className={styles.statusDot} />
                      {property.status}
                    </span>

                    <span className={styles.imageIndex}>
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(filteredProperties.length).padStart(2, "0")}
                    </span>
                  </div>

                  <span className={styles.imageArrow} aria-hidden="true">
                    ↗
                  </span>
                </Link>

                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.category}>{property.category}</span>

                    <span>AVENOR SELECT</span>
                  </div>

                  <h2 className={styles.propertyName}>
                    <Link href={`/properties/${property.id}`}>
                      {property.name}
                    </Link>
                  </h2>

                  <p className={styles.location}>
                    <span className={styles.locationMark} aria-hidden="true">
                      ↗
                    </span>

                    {property.location}
                  </p>

                  <p className={styles.description}>{property.description}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.bedrooms}>
                      {property.bedrooms} bedrooms <span>· Residential</span>
                    </span>

                    <Link
                      href={`/properties/${property.id}`}
                      className={styles.viewDetails}
                    >
                      View details <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {filteredProperties.length === 0 && (
              <div className={styles.emptyState}>
                <h2>Nothing in this collection just yet.</h2>

                <p>
                  Try another property type or adjust your search to explore the
                  collection.
                </p>

                <button
                  type="button"
                  className={styles.filterButton}
                  onClick={() => {
                    setActiveCategory("All properties");
                    setSearchQuery("");
                    setSortBy("recommended");
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        <p className={styles.disclaimer}>
          The properties shown are illustrative concept entries created for the
          AVENOR website. They are not verified listings or offers for sale.
          Availability, pricing, ownership and property details have not been
          independently verified.
        </p>
      </div>
    </main>
  );
}
