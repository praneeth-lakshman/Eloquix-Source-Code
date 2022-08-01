import Head from "next/head";
import HeadingTitle from "./components/HeadingTitle";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eloquix: Elevating the Youth for the Future</title>
        <meta
          name="description"
          content="Eloquix: Elevating the Youth for the Future"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <HeadingTitle />
      </main>
    </div>
  );
}
