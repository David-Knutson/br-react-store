import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../redux-store";
import { emptyCart } from "../../../redux-store/actions/ShoppingCartActions";
import CartItem from "../../cart/cartItem";
import CheckoutDetailsCard from "./CheckoutDetailsCard";

const Checkout: React.FC = () => {
  const [showPromoModal, setShowPromoModal] = useState(false);

  const dispatch = useDispatch();
  const { shoppingCartItems, total } = useSelector(
    (state: RootStore) => state.shoppingCart
  );

  const cartEmpty = shoppingCartItems?.length === 0;

  const checkout = () => {
    dispatch(emptyCart());
    window.alert("Thank you for your purchase.");
  };

  const handleClose = () => setShowPromoModal(false);
  const handleShow = () => setShowPromoModal(true);
  return (
    <>
      {!cartEmpty && <h1>Confirm Your Order</h1>}
      {cartEmpty && (
        <div className="text-center my-5">
          <FaShoppingCart color="gray" size="70" />
          <h3 className="my-4 text-muted">Your cart is empty</h3>
          <br />
          <p>Please add some items to your cart to continue.</p>
        </div>
      )}

      <Row>
        <Col xs={12} md={8}>
          {shoppingCartItems &&
            shoppingCartItems.map((item) => (
              <CartItem item={item} key={item.product.id} />
            ))}
        </Col>
        <Col xs={12} md={4}>
          {!cartEmpty && (
            <CheckoutDetailsCard
              total={total}
              checkout={checkout}
              addPromo={handleShow}
            />
          )}
        </Col>
      </Row>
      <Modal show={showPromoModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Checkout;
