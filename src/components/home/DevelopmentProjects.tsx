import Image from "next/image";

import { developments } from "@/data/developments";
import styles from "./DevelopmentProjects.module.css";

export default function DevelopmentProjects() {
  const [featuredProject, ...otherProjects] = developments;

  return (
    <section
      id="developments"
      className={styles.section}
      aria-labelledby="developments-heading"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>03 / THOUGHTFUL DEVELOPMENT</span>

            <h2 id="developments-heading" className={styles.title}>
              From an idea
              <br />
              <em>to a place.</em>
            </h2>
          </div>

          <div className={styles.intro}>
            <p>
              Good development starts long before construction. It begins with
              understanding a place, asking better questions, and making
              deliberate decisions about how people will use it.
            </p>

            <span className={styles.introNote}>
              PLACE · PURPOSE · POSSIBILITY
            </span>
          </div>
        </header>

        {featuredProject && (
          <article className={styles.featured}>
            <div className={styles.featuredImage}>
              <Image
                src={featuredProject.image}
                alt={featuredProject.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 65vw"
                className={styles.image}
              />

              <span className={styles.imageLabel}>FEATURED DESIGN STUDY</span>

              <span className={styles.projectNumber}>01</span>
            </div>

            <div className={styles.featuredContent}>
              <div className={styles.projectMeta}>
                <span>{featuredProject.type}</span>
                <span>{featuredProject.location}</span>
              </div>

              <h3 className={styles.projectTitle}>{featuredProject.name}</h3>

              <p className={styles.description}>
                {featuredProject.description}
              </p>

              <div className={styles.designFocus}>
                <span className={styles.focusLabel}>DESIGN CONSIDERATIONS</span>

                <p>{featuredProject.designFocus}</p>
              </div>

              <div className={styles.projectFooter}>
                <span className={styles.stage}>{featuredProject.stage}</span>

                <span className={styles.projectYear}>
                  {featuredProject.year}
                </span>
              </div>
            </div>
          </article>
        )}

        <div className={styles.secondaryGrid}>
          {otherProjects.map((project, index) => (
            <article className={styles.projectCard} key={project.id}>
              <div className={styles.cardImage}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  className={styles.image}
                />

                <span className={styles.cardNumber}>
                  {String(index + 2).padStart(2, "0")}
                </span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.projectMeta}>
                  <span>{project.type}</span>
                  <span>{project.location}</span>
                </div>

                <h3 className={styles.cardTitle}>{project.name}</h3>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.designFocus}>
                  <span className={styles.focusLabel}>
                    DESIGN CONSIDERATIONS
                  </span>

                  <p>{project.designFocus}</p>
                </div>

                <div className={styles.projectFooter}>
                  <span className={styles.stage}>{project.stage}</span>
                  <span className={styles.projectYear}>{project.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>
          The projects presented here are illustrative design concepts created
          for the AVENOR website. They do not represent verified developments,
          completed construction, planning approval, or confirmed development
          commitments.
        </p>
      </div>
    </section>
  );
}
