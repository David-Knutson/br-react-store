import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../redux-store";
import { emptyCart } from "../../../redux-store/actions/ShoppingCartActions";
import CartItem from "../../cart/cartItem";
import ApplyDiscountModal from "./ApplyDiscountModal";
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
          <span>Please add some items to your cart to continue.</span>
        </div>
      )}

      <Row>
        <Col xs={12} lg={8}>
          {shoppingCartItems &&
            shoppingCartItems.map((item) => (
              <CartItem item={item} key={item.product.id} />
            ))}
        </Col>
        <Col xs={12} lg={4}>
          {!cartEmpty && (
            <CheckoutDetailsCard
              total={total}
              checkout={checkout}
              addPromo={handleShow}
            />
          )}
        </Col>
      </Row>
      <ApplyDiscountModal show={showPromoModal} onHide={handleClose} />
    </>
  );
};

export default Checkout;
