import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
export const siteTitle = "South West Fishing";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps): JSX.Element {
  return (
    <div className="  overflow-y-scroll h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Site vitrine pour le guide de pêche Mathieu Bazard"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header></header>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
