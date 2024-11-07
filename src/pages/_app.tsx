import "../app/globals.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import type { AppProps } from "next/app";
import { Providers } from "../app/components/Providers";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
export default MyApp;
