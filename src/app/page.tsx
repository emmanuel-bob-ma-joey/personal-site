"use client";
//import Image from "next/image";
import styles from "./page.module.css";

// import { Link } from "@chakra-ui/next-js";
import { Box, Button, Collapse, Image, useDisclosure } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import React from "react";
import Notes from "../components/Notes";
import Projects from "../components/Projects";
import Fun from "../components/Fun";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const [showNotes, setShowNotes] = React.useState(false);
  const [showProjects, setShowProjects] = React.useState(false);

  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  const closeSecondaryScreen = () => {
    var x = document.getElementById("secondary");
    if (x) {
      x.style.display = "none";
    }
  };

  const openSecondaryScreen = () => {
    var x = document.getElementById("secondary");
    if (x) {
      x.style.display = "block";
    }
  };

  const scrollNotes = () => {
    var x = document.getElementById("notes");
    if (x) {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    //onToggle();
    setShowNotes(!showNotes);
    if (showNotes) {
      openSecondaryScreen();
    } else if (!showNotes && !showProjects) {
      closeSecondaryScreen();
    }
    delay().then(() => {
      console.log("delayed 0.3 sec");
      const element = document.getElementById("notesCollapse");
      console.log(element);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  const scrollProjects = () => {
    if (showNotes) {
      setShowNotes(!showNotes);
    }
    var x = document.getElementById("projects");
    if (x) {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    setShowProjects(!showProjects);
    delay().then(() => {
      console.log("delayed 0.3 sec");
      const element = document.getElementById("projectsCollapse");
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
          src="/panda2.jpeg"
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
          <Link
            onClick={scrollNotes}
            // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card + ""}
            //target="_self"
            rel="noopener noreferrer"
          >
            <div className={styles.code}>
              <h2>
                Song Recs <span>-&gt;</span>
              </h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Link>

          <Link
            // href="/notes"
            onClick={scrollNotes}
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
          </Link>

          <Link
            // href="/projects"
            onClick={scrollProjects}
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
          </Link>
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
      <div id="secondary" className={styles.main}>
        <Fun></Fun>
        {/* <Notes></Notes> */}
        {/* <Projects></Projects> */}
      </div>
    </div>
  );
}
