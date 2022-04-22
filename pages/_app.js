import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";

import Head from "next/head";
import Layout from "../components/layout"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (<>
    <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous">
          </link>
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <br/><br/>
    <footer className="container">
    <p className="float-end"><a href="./index.html">Back to top</a></p>
    <p>&copy; 2022 Mandurah Mens Shed co. &middot; <a href='./'>Dan Phillips Web Development</a> &middot; <a href="./bioPage.html">Contact</a></p>
  </footer>
    </>
  )
}

export default MyApp
