import Image from "next/image";
import Link from "next/link";

import { investments } from "@/data/investments";
import styles from "./InvestmentOpportunities.module.css";

export default function InvestmentOpportunities() {
  return (
    <section
      className={styles.section}
      id="investments"
      aria-labelledby="investments-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headingBlock}>
            <span className={styles.eyebrow}>02 / BEYOND THE RESIDENCE</span>

            <h2 id="investments-heading" className={styles.title}>
              Property with
              <br />
              <em>a longer view.</em>
            </h2>
          </div>

          <div className={styles.intro}>
            <p>
              Real estate decisions begin with better questions. Explore
              development concepts and the considerations that shape their
              potential.
            </p>

            <span className={styles.introNote}>
              RESEARCH · FEASIBILITY · PERSPECTIVE
            </span>
          </div>
        </header>

        <div className={styles.opportunities}>
          {investments.map((investment, index) => (
            <article className={styles.opportunity} key={investment.id}>
              <div className={styles.imageWrap}>
                <Image
                  src={investment.image}
                  alt={investment.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  className={styles.image}
                />

                <span className={styles.imageIndex}>
                  0{index + 1} / 0{investments.length}
                </span>

                <span className={styles.status}>
                  <span className={styles.statusDot} />
                  {investment.status}
                </span>
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>{investment.category}</span>
                  <span>{investment.location}</span>
                </div>

                <h3 className={styles.name}>{investment.name}</h3>

                <p className={styles.overview}>{investment.overview}</p>

                <div className={styles.thesis}>
                  <span className={styles.thesisLabel}>
                    THE INVESTMENT QUESTION
                  </span>

                  <p>{investment.investmentThesis}</p>
                </div>

                <div className={styles.footer}>
                  <span className={styles.stage}>{investment.stage}</span>

                  <Link
                    href="/contact?subject=Investment%20enquiry"
                    className={styles.enquiryLink}
                    aria-label={`Enquire about ${investment.name}`}
                  >
                    Discuss this concept
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.disclaimer}>
          <span className={styles.disclaimerMark} aria-hidden="true">
            i
          </span>

          <p>
            These are illustrative development concepts, not current investment
            offers. No financial returns, ownership interests, funding
            arrangements, or project availability are represented. Any future
            opportunity will require appropriate due diligence and verified
            project documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
