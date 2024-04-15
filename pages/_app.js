import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Prism</title>
        <link rel="icon" href="" sizes="any" />
        <meta name="description" content="Ton festival de musique !" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
