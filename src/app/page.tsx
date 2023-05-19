"use client";
//import Image from "next/image";
import styles from "./page.module.css";

// import { Link } from "@chakra-ui/next-js";
import { Box, Button, Collapse, Image, useDisclosure } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useRef } from "react";
import { flushSync } from "react-dom";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();

  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  const executeScroll = () => {
    var x = document.getElementById("notes");
    if (x) {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    onToggle();
    delay().then(() => {
      console.log("delayed 0.3 sec");
      const element = document.getElementById("poop");
      console.log(element);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  };
  return (
    <div>
      <main className={styles.main}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/anime.jpeg"
          alt="Emmanuel Ma"
        />

        <div className={styles.description}>
          <div>
            <p>
              Hi, I'm Emmanuel! I'm a 3rd year software engineering student
              @McGill with a minor in philosophy. Currently I am interning at
              Automatic Data Processing and during the school year I am a
              helpdesk tutor for CSUS McGill. In my free time I enjoy running,
              competing for the McGill Poker team, playing table tennis, and
              practicing piano or violin.
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
        <Button onClick={executeScroll}>Click Me</Button>
      </main>
      <div id="notes" style={{ display: "none" }} className={styles.main}>
        <Collapse id="poop" in={isOpen} animateOpacity>
          <div className={styles.description}>
            <Text>
              <Link
                textDecoration={"underline"}
                className={styles.inline}
                href="/Abstract_Interpretation.pdf"
                isExternal
              >
                Introduction to Abstract Interpretation
              </Link>{" "}
              - A brief introductory paper on Abstract Interpretation; a static
              analysis method for formal verification. Written in collaboration
              with{" "}
              <Link
                textDecoration={"underline"}
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
                textDecoration={"underline"}
                className={styles.inline}
                href="/Connect4.pdf"
                isExternal
              >
                Reinforcement Learning on Connect4
              </Link>{" "}
              - Compared the performance of various reinforcement learning and
              tree search algorithms against a random policy connect 4 agent.
              Written in collaboration with{" "}
              <Link
                textDecoration={"underline"}
                className={styles.inline}
                href="https://ca.linkedin.com/in/yizhe-zhao-bb6a1222b"
                isExternal
              >
                Yi Zhe Zhao.
              </Link>
            </Text>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
