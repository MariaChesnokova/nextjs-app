import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
