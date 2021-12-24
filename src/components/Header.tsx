import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MOCKDATA } from "../mockdata/MockData";
import { RootStore } from "../redux-store";
import { ToggleCart } from "../redux-store/actions/ShoppingCartActions";
import Cart from "./cart/cart";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state: RootStore) => state.shoppingCart);

  const cartButtonClicked = () => {
    dispatch(ToggleCart());
  };

  const productData = MOCKDATA;

  return (
    <>
      <Navbar className="px-4 shadow-sm" bg="white" expand="lg">
        <Navbar.Brand>
          <h2>React Store</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {productData.map((product) => (
              <NavLink
                className="mx-4"
                to={`/product/${product.id}`}
                key={product.id}
              >
                {product.title}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>

        <Nav className="justify-content-end">
          <Button onClick={cartButtonClicked}>View Cart</Button>
        </Nav>
      </Navbar>
      <Cart open={isOpen} />
    </>
  );
};

export default Header;
