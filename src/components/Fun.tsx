import React from "react";
import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import styles from "../app/page.module.css";

const Fun = () => {
  return (
    <div className={styles.poop}>
      <h3 style={{ paddingBottom: "6em" }}>Chamber Music</h3>

      <div className={styles.poop}>
        <Text>
          <Link
            textDecoration={"underline"}
            className={styles.inline}
            href="https://www.youtube.com/watch?v=GbP8dZ76DBw&feature=youtu.be"
            isExternal
          >
            Destenay, trio in b minor for piano, oboe and clarinet, op.27
          </Link>{" "}
          - Oboist: Tommy He, Clarinetist: Jihoon Jeon
        </Text>
        <Text>
          Khachaturian - Trio for Violin, Clarinet and Piano - Clarinetist:
          Jihoon Jeon, Violinist: Zein Nakhleh
        </Text>
        <Link
          textDecoration={"underline"}
          className={styles.inline}
          href="/audio/mvmt1"
          target="_blank"
          isExternal
        >
          1st Movement
        </Link>{" "}
        <Link
          textDecoration={"underline"}
          className={styles.inline}
          href="/audio/mvmt3"
          target="_blank"
          isExternal
        >
          3rd Movement
        </Link>{" "}
        <Text>
          <Link
            textDecoration={"underline"}
            className={styles.inline}
            href="https://www.youtube.com/watch?v=nyrs6DvTErQ"
            isExternal
          >
            Johannes Brahms - Clarinet Sonata No. 1, Op. 120 II. Andante un poco
            adagio
          </Link>{" "}
          - Clarinetist: Jihoon Jeon
        </Text>
      </div>
      <div style={{ paddingTop: "6em" }}>
        <h3>Piano solo</h3>
      </div>

      <div className={styles.poop} style={{ padding: "6em" }}>
        <Text>
          Beethoven - Sonata No. 23 Op. 57 (Appassionata) 3rd Movement
        </Text>
        <Text>
          <Link
            textDecoration={"underline"}
            className={styles.inline}
            href="https://www.youtube.com/watch?v=eigpH21wFKg&t=58s"
            isExternal
          >
            Chopin - Fantaisie Impromptu, Op. 66
          </Link>
        </Text>
        <Text>Chopin - Étude Op. 10, No. 12 </Text>
        <Text>Mendelssohn - Rondo Capriccioso in E, Op.14</Text>
        <Text>
          <Link
            textDecoration={"underline"}
            className={styles.inline}
            href="https://www.youtube.com/watch?v=PWabryzEQzM&ab_channel=EmmanuelMa"
            isExternal
          >
            Rachmaninoff - prelude in C# minor Op.3 No. 2
          </Link>{" "}
        </Text>

        <Text>Rachmaninov - Prelude op. 23 no. 5 in G minor</Text>
        <Text>Rachmaninoff - Moments musicaux Op.16 No.3</Text>
        <Text>Rachmaninoff - Moments musicaux Op.16 No.4</Text>
      </div>
    </div>
  );
};

export default Fun;
