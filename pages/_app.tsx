import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
type ComponentProps = AppProps & {
  Component: NextPage & {
    getLayout: (page: React.ReactNode) => React.ReactNode;
  };
};
export default function App({ Component, pageProps }: ComponentProps) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Nextjs training</title>
        <meta name="description" content="traing nextjs" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
