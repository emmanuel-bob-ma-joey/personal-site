import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emmanuel Ma",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className={styles.description}> */}
        {/* <Link href="/">Emmanuel Ma</Link> */}
        {/* </div> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
