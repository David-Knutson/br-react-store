import React from "react";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { ShoppingCartItem } from "../../actions/ShoppingCartActionTypes";
import classes from "./cartItem.module.scss";
import { removeItemFromCart } from "../../actions/ShoppingCartActions";

type CartItemProps = {
  item: ShoppingCartItem;
};

const CartItem: React.FC<CartItemProps> = (props) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(removeItemFromCart(props.item.id));
  };
  return (
    <div className={classes.container + " shadow-sm"}>
      <div className={classes.image}>
        <img src={props.item.imageUrl} alt="product" />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.name}>
          {props.item.quantity}x {props.item.name}
        </div>
        <div className={classes.price}>${props.item.price}</div>
        <div className={classes.xButton + " clickable"} onClick={removeItem}>
          <FaTrashAlt />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
