"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
//import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Text>
          <Link
            className={styles.inline}
            href="/Abstract_Interpretation.pdf"
            isExternal
          >
            Introduction to Abstract Interpretation
          </Link>{" "}
          - A brief introductory paper on Abstract Interpretation; a static
          analysis method for formal verification. Written in collaboration with{" "}
          <Link
            className={styles.inline}
            href="https://www.linkedin.com/in/belle-c-pan/"
            isExternal
          >
            Belle Pan.
          </Link>
        </Text>
      </div>
      <div className={styles.description}>
        <Text>
          <Link
            className={styles.inline}
            href="/Abstract_Interpretation.pdf"
            isExternal
          >
            Introduction to Abstract Interpretation
          </Link>{" "}
          - A brief introductory paper on Abstract Interpretation; a static
          analysis method for formal verification. Written in collaboration with{" "}
          <Link
            className={styles.inline}
            href="https://www.linkedin.com/in/belle-c-pan/"
            isExternal
          >
            Belle Pan.
          </Link>
        </Text>
      </div>
      <div className={styles.description}>
        <Text>
          <Link
            className={styles.inline}
            href="/Abstract_Interpretation.pdf"
            isExternal
          >
            Introduction to Abstract Interpretation
          </Link>{" "}
          - A brief introductory paper on Abstract Interpretation; a static
          analysis method for formal verification. Written in collaboration with{" "}
          <Link
            className={styles.inline}
            href="https://www.linkedin.com/in/belle-c-pan/"
            isExternal
          >
            Belle Pan.
          </Link>
        </Text>
      </div>
    </main>
  );
}
