import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <Container className="mt-5">{props.children}</Container>
    </>
  );
};

export default Layout;
