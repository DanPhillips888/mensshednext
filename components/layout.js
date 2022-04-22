/* /components/Layout.js */

import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";

const Layout = (props) => {
const title = "Welcome to The Mens Shed";

  return (
    <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      {/* <script src="https://js.stripe.com/v3" /> */}
    </Head>
    <header>
      <style jsx>
        {`
          a {
            color: white;
          }
          h5 {
            color: white;
            padding-top: 11px;
          }
        `}
      </style>
      <Nav className="navbar navbar-dark bg-dark">
        <NavItem>
          <Link href="/">
            <a className="navbar-brand">The Mens Shed</a>
          </Link>
        </NavItem>

        <NavItem>
            <Link href="/contact">
              <a className="nav-link">Contacts</a>
            </Link>
        </NavItem>
        
        <NavItem>
            <Link href="/bios">
              <a className="nav-link">Bios</a>
            </Link>
        </NavItem>
        <NavItem>
            <Link href="/products">
              <a className="nav-link">Products</a>
            </Link>
        </NavItem>
        <NavItem>
            <Link href="/history">
              <a className="nav-link">History</a>
            </Link>
        </NavItem>
        <NavItem>
            <Link href="/projects">
              <a className="nav-link">Projects</a>
            </Link>
        </NavItem>
        <NavItem>
            <Link href="/sponsors">
              <a className="nav-link">Sponsors</a>
            </Link>
        </NavItem>
        
      </Nav>
    </header>
    <Container>{props.children}</Container>
  </div>
);
};

export default Layout;