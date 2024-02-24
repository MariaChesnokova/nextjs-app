import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import QueryProvider from "@/providers/QueryProvider";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <QueryProvider> 
      <Header />
      <Component {...pageProps} />
      <Footer />
    </QueryProvider>    
    
    </>
  );
}
