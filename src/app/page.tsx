"use client";
//import Image from "next/image";
import styles from "./page.module.css";

// import { Link } from "@chakra-ui/next-js";
import {
  background,
  Box,
  Button,
  Collapse,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import React from "react";
import Notes from "../components/Notes";
import Projects from "../components/Projects";
import Fun from "../components/Fun";
import Recommendations from "../components/Recommendations";

export default function Home() {
  const [pageState, setPageState] = React.useState(0);

  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    console.log("useeffect has been called");
    console.log("page state is", pageState);
    const element = document.getElementById("secondary");
    console.log(element);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [pageState]); // pass `value` as a dependency

  return (
    <div>
      <main className={styles.main}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/panda2.jpeg"
          alt="Emmanuel Ma"
        />
        <div className={styles.icon}>
          <Link
            // className={styles.description}
            href="https://github.com/emmanuel-bob-ma-joey"
            target="_blank"
            className={styles.bounce + " " + styles.child}
          >
            <Image
              src="/github-icon.png"
              style={{ width: "2.5em", height: "2.5em" }}
            ></Image>
          </Link>
          <Link
            // className={styles.description}
            href="https://www.linkedin.com/in/emmanuel-ma-5092261a5/"
            target="_blank"
            className={styles.bounce + " " + styles.child}
            style={{
              animationDuration: "2",
              animationIterationCount: "infinite",
              transformOrigin: "bottom",
            }}
          >
            <Image
              src="/linkedin.png"
              style={{
                width: "2.5em",
                height: "2.5em",
              }}
            ></Image>
          </Link>
          <Link
            // className={styles.description}
            href="/resume.pdf"
            target="_blank"
            className={styles.bounce + " " + styles.child}
          >
            <Image
              src="/document3.png"
              style={{ width: "2.5em", height: "2.5em" }}
            ></Image>
          </Link>
        </div>

        <div className={styles.description}>
          <div>
            <p>
              Hi, I'm Emmanuel! I'm a 3rd year software engineering student
              @McGill with a minor in philosophy, currently interning at
              Automatic Data Processing. During the school year I am a helpdesk
              tutor for CSUS McGill and workshop lead for the competitive
              programming club. In my free time I enjoy running, competing for
              the McGill Poker team, playing table tennis, and practicing piano
              or violin.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            // onClick={scrollNotes}
            onClick={() => setPageState(1)}
            // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card + ""}
            //target="_self"
            rel="noopener noreferrer"
          >
            <div className={styles.code}>
              <h2>
                Song Recs <span>-&gt;</span>
              </h2>
              <p>You are compelled to click here.</p>
            </div>
          </Link>

          <Link
            // href="/notes"
            // onClick={scrollNotes}
            onClick={() => setPageState(2)}
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
            // onClick={scrollProjects}
            onClick={() => setPageState(3)}
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
          <Link
            // href="/fun"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
            onClick={() => setPageState(4)}
          >
            <div className={styles.code}>
              <h2>
                Fun <span>-&gt;</span>
              </h2>
              <p>Stuff I like to do for fun.</p>
            </div>
          </Link>
        </div>
        {/* <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link> */}
      </main>

      {/* <Fun></Fun>*/}
      {pageState == 1 ? (
        <div id="secondary" className={styles.main}>
          <Recommendations></Recommendations>
        </div>
      ) : pageState == 2 ? (
        <div id="secondary" className={styles.main}>
          <Notes></Notes>
        </div>
      ) : pageState == 3 ? (
        <div id="secondary" className={styles.main}>
          <Projects></Projects>
        </div>
      ) : pageState == 4 ? (
        <div id="secondary" className={styles.main}>
          <Fun></Fun>
        </div>
      ) : null}
    </div>
  );
}
