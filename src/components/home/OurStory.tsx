import Link from "next/link";
import styles from "./OurStory.module.css";

export default function OurStory() {
  return (
    <section
      id="story"
      className={styles.section}
      aria-labelledby="story-heading"
    >
      <div className={styles.container}>
        <div className={styles.index}>
          <span>04 / THE AVENOR PERSPECTIVE</span>
          <span>PROPERTY. PERSPECTIVE. POSSIBILITY.</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.headingBlock}>
            <span className={styles.eyebrow}>OUR APPROACH</span>

            <h2 id="story-heading" className={styles.title}>
              Property is
              <br />
              more than
              <br />
              <em>what you see.</em>
            </h2>

            <div className={styles.decorativeLine} aria-hidden="true" />
          </div>

          <div className={styles.storyBody}>
            <p className={styles.lead}>
              Every property decision begins with a question about the future.
            </p>

            <p>
              How should a space feel to live in? What makes a location worth
              understanding? What needs to be considered before an idea becomes
              a viable development?
            </p>

            <p>
              AVENOR brings these questions into one considered perspective on
              property, investment thinking, and development. We believe that
              good decisions begin with clarity about the place, the purpose,
              and the people involved.
            </p>

            <p>
              Our aim is to make property easier to explore and its
              possibilities easier to understand—without losing sight of the
              practical details behind every decision.
            </p>

            <div className={styles.principles}>
              <div className={styles.principle}>
                <span className={styles.principleNumber}>01</span>
                <div>
                  <h3>Understand the place.</h3>
                  <p>Context matters as much as appearance.</p>
                </div>
              </div>

              <div className={styles.principle}>
                <span className={styles.principleNumber}>02</span>
                <div>
                  <h3>Consider the purpose.</h3>
                  <p>Every decision should have a reason behind it.</p>
                </div>
              </div>

              <div className={styles.principle}>
                <span className={styles.principleNumber}>03</span>
                <div>
                  <h3>See the possibility.</h3>
                  <p>
                    Good thinking connects today&apos;s choices to tomorrow.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/contact" className={styles.storyLink}>
              Start a conversation
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
