import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "@/components/atoms/NavBar/NavBar";
import { Container } from "react-bootstrap";
import { wrapper } from "@/app/store";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossOrigin="anonymous"
      />
      <NavBar />
      <Container className="py-2">
        <Component {...pageProps} />
      </Container>
    </>
  );
};

export default wrapper.withRedux(App);
