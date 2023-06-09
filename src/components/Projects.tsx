import React from "react";
import {
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Link,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { IconButton } from "@chakra-ui/react";

import styles from "../app/page.module.css";

const Projects = () => {
  return (
    <>
      <div id="projects">
        <p>Projects</p>
      </div>
      <div className={styles.code}>
        <div className={styles.cardgrid}>
          <Card className={styles.projectcard}>
            <CardBody>
              <Image src="/signlingo.jpeg" alt="Signlingo" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Signlingo</Heading>
                <Text>
                  An application to help you learn American Sign Language. Award
                  winning project @McHacks 10.
                </Text>

                <Link className={styles.poop} href="example.com">
                  <Image
                    src="/github-icon.png"
                    style={{ width: "2em", height: "2em" }}
                  ></Image>
                </Link>
              </Stack>
            </CardBody>

            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  Python
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  OpenCV
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  TKinter
                </Button>
              </ButtonGroup>
            </CardFooter>
            <Divider />
          </Card>

          <Card className={styles.projectcard}>
            <CardBody>
              <Image
                src="/finance.png"
                alt="Finance Dashboard"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="1">
                <Heading size="md">Finance Dashboard</Heading>
                <Text>
                  A responsive fullstack app allowing users to view market
                  trends, latest financial news and track their portfolio.
                </Text>
                <Link
                  className={styles.poop}
                  href="https://github.com/emmanuel-bob-ma-joey/financial_dashboard"
                  target="_blank"
                >
                  <Image
                    src="/github-icon.png"
                    style={{ width: "2em", height: "2em" }}
                  ></Image>
                </Link>
              </Stack>
            </CardBody>

            <CardFooter>
              <ButtonGroup
                className={styles.grid}
                style={{ display: "flow-root" }}
                spacing="1"
              >
                <Button
                  variant="solid"
                  className={styles.cardbutton}
                  colorScheme="blue"
                >
                  React
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  MongoDB
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  Tailwind
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  ALphaVantage API
                </Button>
              </ButtonGroup>
            </CardFooter>
            <Divider />
          </Card>

          <Card className={styles.projectcard}>
            <CardBody className={styles.cardBody}>
              <Image
                src="/C.png"
                alt="mini-c compiler"
                borderRadius="lg"
                height={"15em"}
              />
              <Stack mt="3" spacing="3">
                <Heading size="md">Mini-C Compiler</Heading>
                <Text>
                  A compiler for a mini-c language with mips assembly as the
                  target language. Semester long project for a compiler design
                  course (COMP520).
                </Text>
              </Stack>
            </CardBody>

            <CardFooter>
              <ButtonGroup spacing="1">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  Java
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  Mips Assembly
                </Button>
              </ButtonGroup>
            </CardFooter>
            <Divider />
          </Card>
          <Card className={styles.projectcard} maxW="sm">
            <CardBody className={styles.cardBody}>
              <Image
                src="/positive_news.png"
                alt="positive news web scraper"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Web Scraper App</Heading>
                <Text>
                  A web app that scrapes popular news sites and displays only
                  articles with positive news.
                </Text>
                <Link
                  className={styles.poop}
                  href="https://github.com/lucmaxwell/McHacks-2021"
                  target="_blank"
                >
                  <Image
                    src="/github-icon.png"
                    style={{ width: "2em", height: "2em" }}
                  ></Image>
                </Link>
              </Stack>
            </CardBody>

            <CardFooter style={{ height: "10em" }}>
              <ButtonGroup
                style={{ display: "flex" }}
                className={styles.grid}
                spacing="1"
              >
                <Button
                  //className={styles.poop}
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  Flask
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  Vue
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  SQL
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  Newspaper
                </Button>
              </ButtonGroup>
            </CardFooter>
            <Divider />
          </Card>
          <Card className={styles.projectcard} maxW="sm">
            <CardBody className={styles.cardBody}>
              <Image
                src="/shinzy.png"
                alt="positive news web scraper"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">AI Paperwork Helper</Heading>
                <Text>
                  Uses a ML text summarizer and AI chatbot to make complicated
                  legal and insurance documents more digestible.
                </Text>
                <Link
                  className={styles.poop}
                  href="https://github.com/THe142857/shinz"
                  target="_blank"
                >
                  <Image
                    src="/github-icon.png"
                    style={{ width: "2em", height: "2em" }}
                  ></Image>
                </Link>
              </Stack>
            </CardBody>

            <CardFooter style={{ height: "10em" }}>
              <ButtonGroup
                style={{ display: "flex" }}
                className={styles.grid}
                spacing="1"
              >
                <Button
                  //className={styles.poop}
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  Flask
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  Torch
                </Button>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  className={styles.cardbutton}
                >
                  Bootstrap
                </Button>
              </ButtonGroup>
            </CardFooter>
            <Divider />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Projects;
