import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux-store/actions/ProductsActions";
import { addItemToShoppingCart } from "../../redux-store/actions/ShoppingCartActions";
import { ShoppingCartItem } from "../../redux-store/actions/ShoppingCartActionTypes";
import { MOCKDATA } from "../../mockdata/MockData";
import { RootStore } from "../../redux-store";
import CenteredSpinnerComponent from "../CenteredSpinner";
import QuantityPicker from "../QuantityPicker";

type ProductsComponentProps = {
  productId: string;
};

const ProductsComponent: React.FC<ProductsComponentProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const decrementQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const productId = parseInt(props.productId, 10);
  const dispatch = useDispatch();
  // need to add products back to this selector loading, error, products
  const { loading, error, products } = useSelector(
    (state: RootStore) => state.products
  );
  // console.log()
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);
  //====================================================================
  const productDataArray = MOCKDATA.filter(
    (product) => product.id === productId
  );
  const productData = productDataArray[0];
  // console.log("productAData", productData);

  //====================================================================

  const addProductToCart = (cartItem: ShoppingCartItem) => {
    console.log("Item added to cart", cartItem);
    dispatch(addItemToShoppingCart(cartItem));
  };

  if (loading) {
    return <CenteredSpinnerComponent />;
  } else if (error) {
    return <Alert variant="danger">{error.toString()}</Alert>;
  }
  return (
    <>
      <Row>
        <Col>
          <h1>{productData.name}</h1>
        </Col>
      </Row>
      <Row className="mb-2 mt-4">
        <Col xs={12} sm={12} md={6}>
          {productData.imageUrl ? (
            <Image className="shadow" src={productData.imageUrl} fluid />
          ) : (
            <CenteredSpinnerComponent />
          )}
        </Col>
        <Col className="pl-md-5 pt-5 pt-sm-5 pt-md-0" xs={12} sm={12} md={6}>
          <p>{productData.description}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4>${productData.price}</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>Quantity</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <QuantityPicker
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            quantity={quantity}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button
            size="lg"
            onClick={() =>
              addProductToCart({
                id: productData.id,
                name: productData.name,
                quantity: quantity,
                imageUrl: productData.imageUrl,
                price: productData.price,
              })
            }
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ProductsComponent;
