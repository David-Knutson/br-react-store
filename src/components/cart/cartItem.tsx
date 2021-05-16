import React from "react";
import { ShoppingCartItem } from "../../actions/ShoppingCartActionTypes";
import classes from "./cartItem.module.scss";

type CartItemProps = {
  item: ShoppingCartItem;
};

const CartItem: React.FC<CartItemProps> = (props) => (
  <div className={classes.container + " shadow-sm"}>
    <div className={classes.image}>
      <img src={props.item.imageUrl} alt="product" />
    </div>
    <div className={classes.infoContainer}>
      <div className={classes.name}>
        {props.item.quantity}x {props.item.name}
      </div>
      <div className={classes.price}>${props.item.price}</div>
      <div className={classes.xButton + " clickable"}>✕</div>
    </div>
  </div>
);

export default CartItem;
