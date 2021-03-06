import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Score() {
  const router = useRouter();
  const { point, question } = router.query;
  const score = (parseInt(point) / parseInt(question)) * 100;
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Al-Quran Assesment</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Game Over!</h1>

          <p className={styles.verses}>Score: {score}</p>
          <p className={styles.question}>
            Kamu menjawab benar {point} dari {question} soal
          </p>

          <div className={styles.grid}>
            <Link href="/question/1">
              <a className={styles.card}>
                <h2>Retry &rarr;</h2>
                <p>Retry the assessment</p>
              </a>
            </Link>
            <Link href="/">
              <a className={styles.card}>
                <h2>Back &rarr;</h2>
                <p>Back to home</p>
              </a>
            </Link>
          </div>
        </main>

        <footer className={styles.footer}>
          <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            Copyright 2021 Al-Quran Assesment
          </a>
        </footer>
      </div>
    </div>
  );
}
