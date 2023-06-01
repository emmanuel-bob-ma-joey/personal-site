"use client";

import styles from "./page.module.css";

import React from "react";

export default function Mvt1() {
  return (
    <div>
      <main className={styles.main}>
        <audio controls>
          <source src="/Mvt-1.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </main>
    </div>
  );
}
