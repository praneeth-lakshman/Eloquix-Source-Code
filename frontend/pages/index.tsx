import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eloquix: Elevating the Youth for the Future</title>
        <meta
          name="description"
          content="Eloquix: Elevating the Youth for the Future"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold text-underline">
          Test for Tailwind CSS
        </h1>
      </main>
    </div>
  );
}
