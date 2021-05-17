import React from "react";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { ShoppingCartItem } from "../../redux-store/actions/ShoppingCartActionTypes";
import classes from "./cartItem.module.scss";
import { removeItemFromCart } from "../../redux-store/actions/ShoppingCartActions";

type CartItemProps = {
  item: ShoppingCartItem;
};

const CartItem: React.FC<CartItemProps> = (props) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeItemFromCart(props.item.product.id));
  };

  return (
    <div className={classes.container + " shadow-sm"}>
      <div className={classes.image}>
        <img src={props.item.product.imageUrl} alt="product" />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.name}>
          {props.item.quantity}x {props.item.product.name}
        </div>
        <div className={classes.price}>${props.item.product.price} ea.</div>
        <div className={classes.xButton + " clickable"} onClick={removeItem}>
          <FaTrashAlt />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
