import React from "react";
import { Button } from "react-bootstrap";
import classes from "./cart.module.scss";
import { RootStore } from "../../redux-store";
import CartItem from "./cartItem";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { emptyCart } from "../../redux-store/actions/ShoppingCartActions";

type CartProps = {
  open: boolean;
};

// let useClickOutside = (handler: any) => {
//   let domNode = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     let maybeHandler = (event: any) => {
//       if (domNode.current && !!domNode.current.contains(event.target)) {
//         handler();
//       }
//     };
//     document.addEventListener("mousedown", handler);

//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   });
//   return domNode;
// };

const Cart: React.FC<CartProps> = (props) => {
  const dispatch = useDispatch();
  const { shoppingCartItems } = useSelector(
    (state: RootStore) => state.shoppingCart
  );

  // let domNode = useClickOutside(() => {
  //   if (isOpen) {
  //     dispatch(ToggleCart());
  //   }
  // });

  const cartEmpty = shoppingCartItems?.length === 0;

  const checkout = () => {
    dispatch(emptyCart());
    window.alert("Thank you for your purchase.");
  };

  return (
    <div
      // ref={domNode}
      className={classes.cart + " " + (props.open ? classes.open : "")}
    >
      {cartEmpty && (
        <div className="text-center my-5">
          <FaShoppingCart color="gray" size="70" />
          <h3 className="my-4 text-muted">Your cart is empty</h3>
        </div>
      )}
      {shoppingCartItems &&
        shoppingCartItems.map((item) => (
          <CartItem item={item} key={item.product.id} />
        ))}
      <Button
        block
        variant={cartEmpty ? "secondary" : "primary"}
        disabled={cartEmpty}
        size="lg"
        onClick={checkout}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
