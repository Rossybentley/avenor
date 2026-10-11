"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const navigationLinks = [
  { label: "Properties", href: "#properties" },
  { label: "Investments", href: "#investments" },
  { label: "Developments", href: "#developments" },
  { label: "Our story", href: "#story" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link
          href="/"
          className={styles.logo}
          aria-label="AVENOR homepage"
          onClick={closeMenu}
        >
          AVENOR<span>.</span>
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="avenor-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div
          id="avenor-navigation"
          className={`${styles.navigation} ${
            menuOpen ? styles.navigationOpen : ""
          }`}
        >
          <div className={styles.links}>
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.navLink}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className={styles.contactLink} onClick={closeMenu}>
            Start a conversation
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
