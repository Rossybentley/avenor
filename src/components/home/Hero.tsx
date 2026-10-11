import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <span className="eyebrow">Real estate, reconsidered</span>

          <h1 className={styles.title}>
            Space to live.
            <br />
            <span>Assets to grow.</span>
          </h1>

          <p className={styles.description}>
            Discover exceptional residences, considered investment
            opportunities, and developments shaped by architectural ambition.
          </p>

          <div className={styles.actions}>
            <a href="#properties" className={styles.primaryAction}>
              Explore properties
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#story" className={styles.secondaryAction}>
              Discover AVENOR
            </a>
          </div>

          <div className={styles.note}>
            <span className={styles.noteLine} />
            <p>
              A considered approach to property
              <br />
              in Lagos and beyond.
            </p>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
            alt="Contemporary residence with considered architectural details"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 54vw"
            className={styles.heroImage}
          />

          <div className={styles.imageLabel}>
            <span>THE AVENOR PERSPECTIVE</span>
            <span>01 / ARCHITECTURE</span>
          </div>

          <div className={styles.propertyCard}>
            <div>
              <span className={styles.cardLabel}>A DIFFERENT WAY TO LIVE</span>

              <h2>Considered spaces.</h2>

              <p>Architecture, atmosphere, and a sense of place.</p>
            </div>

            <a
              href="#properties"
              className={styles.cardArrow}
              aria-label="Explore featured properties"
            >
              ↗
            </a>
          </div>
        </div>
      </div>

      <div className={styles.heroFooter}>
        <span>RESIDENCES</span>
        <span className={styles.footerDivider} />
        <span>INVESTMENTS</span>
        <span className={styles.footerDivider} />
        <span>DEVELOPMENTS</span>

        <a href="#properties" className={styles.scrollLink}>
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
