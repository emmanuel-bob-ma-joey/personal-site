import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";

import styles from "../app/page.module.css";

const Notes = () => {
  return (
    <div id="notes">
      <div className={styles.description}>
        <h1 className={styles.center}>Notes</h1>

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
          analysis method for formal verification. Written in collaboration with{" "}
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
          - Compared the performance of various reinforcement learning and tree
          search algorithms against a random policy connect 4 agent. Written in
          collaboration with{" "}
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
    </div>
  );
};

export default Notes;
