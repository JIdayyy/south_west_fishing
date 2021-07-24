import { AppProps } from "next/dist/next-server/lib/router/router";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
