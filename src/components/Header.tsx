import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { MOCKDATA } from "../mockdata/MockData";
import Cart from "./cart/cart";

const Header: React.FC = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartButtonClicked = () => setIsCartVisible(!isCartVisible);
  const productData = MOCKDATA;
  return (
    <>
      <Navbar className="px-4 shadow-sm" bg="white" expand="lg">
        <Navbar.Brand>React Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {productData.map((product) => (
              <Nav.Link href={`/product/?id=${product.id}`}>
                {product.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>

        <Nav className="justify-content-end">
          <Button onClick={cartButtonClicked}>View Cart</Button>
        </Nav>
      </Navbar>
      <Cart open={isCartVisible} />
    </>
  );
};

export default Header;
