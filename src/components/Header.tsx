import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootStore } from "../redux-store";
import { getCategories } from "../redux-store/actions/CategoriesActions";
import { ToggleCart } from "../redux-store/actions/ShoppingCartActions";
import Cart from "./cart/cart";
import { authenticateUser } from "../redux-store/actions/AuthenticationActions";
import LoginModal from "./modals/LoginModal";
import { FaShoppingCart } from "react-icons/fa";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { isOpen, shoppingCartItems } = useSelector(
    (state: RootStore) => state.shoppingCart
  );

  // should move this to redux
  const shoppingCartItemsCount = shoppingCartItems?.reduce(
    (sum, { quantity }) => sum + quantity,
    0
  );

  const loginButtonClicked = () => {
    // dispatch(authenticateUser());
    setShow(true);
  };

  const toggleLoginModal = () => {
    setShow(!show);
  };

  const cartButtonClicked = () => {
    dispatch(ToggleCart());
  };

  const { loading, error, categories } = useSelector(
    (state: RootStore) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <Navbar className="px-4 shadow-sm" bg="white" expand="lg">
        <Navbar.Brand>
          <h2>React Store</h2>
        </Navbar.Brand>
        {loading && (
          <>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" size="sm" />
            Loading Categories...
          </>
        )}
        {error && (
          <>
            <Alert variant="danger">{error}. Try refreshing the page.</Alert>
          </>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {categories?.map((category) => (
              <NavLink
                className="mx-4"
                to={`/products/category/${category}`}
                key={category}
              >
                {category.toUpperCase()}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>

        <Nav className="justify-content-end">
          <Button onClick={toggleLoginModal}>Login</Button>
          <Button className="ms-2" onClick={cartButtonClicked}>
            <FaShoppingCart size="20" />
            {shoppingCartItemsCount !== 0 && (
              <Badge className="ms-2" bg="white" text="primary">
                {shoppingCartItemsCount}
              </Badge>
            )}
          </Button>
        </Nav>
      </Navbar>
      <Cart open={isOpen} />
      <LoginModal show={show} toggle={toggleLoginModal} />
    </>
  );
};

export default Header;
