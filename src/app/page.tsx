import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <p>
          Hi! I'm a second year student at McGill studying software engineering.
          I am currently a helpdesk tutor for CSUS McGill, and also a
          Development Coordinator at Enactus McGill, working on our latest
          community initiative! Some of my favourite hobbies include running,
          playing ping pong, and practicing piano and violin.
        </p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="/notes"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Notes <span>-&gt;</span>
          </h2>
          <p>
            A collection of writings and reports for various CS courses @
            McGill.
          </p>
        </a>

        <a
          href="/projects"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>Check out what I've built!</p>
        </a>
        <a
          href="/fun"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Fun <span>-&gt;</span>
          </h2>
          <p>Some stuff that I like to do for fun.</p>
        </a>
      </div>
    </main>
  );
}
