import React from "react";
import { Button } from "react-bootstrap";
import classes from "./cart.module.scss";
import { RootStore } from "../../Store";
import CartItem from "./cartItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

type CartProps = {
  open: boolean;
};

const Cart: React.FC<CartProps> = (props) => {
  const { shoppingCartItems } = useSelector(
    (state: RootStore) => state.shoppingCart
  );

  const cartEmpty = shoppingCartItems?.length === 0;
  console.log("cartEmpty", cartEmpty);

  console.log("shoppingCartItems", shoppingCartItems);
  return (
    <div className={classes.cart + " " + (props.open ? classes.open : "")}>
      {cartEmpty && (
        <div className="text-center my-5">
          <FaShoppingCart color="gray" size="70" />
          <h3 className="my-4 text-muted">Your cart is empty</h3>
        </div>
      )}
      {shoppingCartItems?.map((item) => (
        <CartItem item={item} />
      ))}
      <Button
        block
        variant={cartEmpty ? "secondary" : "primary"}
        disabled={cartEmpty}
        size="lg"
        onClick={() => window.alert("Thank you for your purchase.")}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
