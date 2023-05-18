"use client";
//import Image from "next/image";
import styles from "./page.module.css";

// import { Link } from "@chakra-ui/next-js";
import { Image } from "@chakra-ui/react";
import Pika from "next/pikasurprised.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="/pikasurprised.png"
        alt="Emmanuel Ma"
      />

      <div className={styles.description}>
        <div>
          <p>
            Hi, I'm Emmanuel! I'm a 3rd year software engineering student
            @McGill currently interning at Automatic Data Processing. I am
            currently a helpdesk tutor for CSUS McGill, and also a Development
            Coordinator at Enactus McGill, working on our latest community
            initiative! Some of my favourite hobbies include running, playing
            ping pong, and practicing piano and violin.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card + ""}
          target="_self"
          rel="noopener noreferrer"
        >
          <div className={styles.code}>
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
        </a>

        <a
          href="/notes"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <div className={styles.code}>
            <h2>
              Notes <span>-&gt;</span>
            </h2>
            <p>
              A collection of writings and reports for various CS courses @
              McGill.
            </p>
          </div>
        </a>

        <a
          href="/projects"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <div className={styles.code}>
            <h2>
              Projects <span>-&gt;</span>
            </h2>
            <p>Check out what I've built!</p>
          </div>
        </a>
        <a
          href="/fun"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <div className={styles.code}>
            <h2>
              Fun <span>-&gt;</span>
            </h2>
            <p>Some stuff that I like to do for fun.</p>
          </div>
        </a>
      </div>
      {/* <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link> */}
    </main>
  );
}
