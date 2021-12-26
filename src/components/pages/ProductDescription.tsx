import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItemToShoppingCart } from "../../redux-store/actions/ShoppingCartActions";
import { ShoppingCartItem } from "../../redux-store/actions/ShoppingCartActionTypes";
import { RootStore } from "../../redux-store";
import CenteredSpinnerComponent from "../CenteredSpinner";
import QuantityPicker from "../QuantityPicker";
import { getProducts } from "../../redux-store/actions/ProductsActions";

type ProductDescriptionProps = {};

const ProductDescription: React.FC<ProductDescriptionProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(1);

  let { id } = useParams<any>();

  const decrementQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const productId = parseInt(id, 10);

  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state: RootStore) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  //====================================================================
  const productDataArray = products?.filter(
    (product) => product.id === productId
  );
  const productData = productDataArray ? productDataArray[0] : undefined;
  //====================================================================

  const addProductToCart = (cartItem: ShoppingCartItem) => {
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
          <h1>{productData?.title}</h1>
        </Col>
      </Row>
      <Row className="mb-2 mt-4">
        <Col xs={12} sm={12} md={6}>
          {productData?.image ? (
            <Image className="shadow p-5" src={productData?.image} fluid />
          ) : (
            <CenteredSpinnerComponent />
          )}
        </Col>
        <Col className="pl-md-5 pt-5 pt-sm-5 pt-md-0" xs={12} sm={12} md={6}>
          <p>{productData?.description}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4>${productData?.price}</h4>
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
                // need to fix this
                product: productData!,
                quantity: quantity,
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

export default ProductDescription;
