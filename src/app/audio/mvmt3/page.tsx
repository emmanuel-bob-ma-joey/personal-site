"use client";

import styles from "./page.module.css";

import React from "react";

export default function Mvt3() {
  return (
    <div>
      <main className={styles.main}>
        <audio controls>
          <source src="/Mvt-3.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </main>
    </div>
  );
}
