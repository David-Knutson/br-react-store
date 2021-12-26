import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux-store";
import { getProducts } from "../../redux-store/actions/ProductsActions";
import CenteredSpinnerComponent from "../CenteredSpinner";
import ErrorAlert from "../ErrorAlert";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state: RootStore) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Row>
        <h1>HomePage</h1>
      </Row>
      <Row>
        {loading && <CenteredSpinnerComponent />}
        {error && <ErrorAlert errorMessage={error} />}
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Carousel style={{ backgroundColor: "black" }}>
            {products?.map((product) => (
              <Carousel.Item>
                <Image
                  key={product.id}
                  className="d-block w-100"
                  src={product.image}
                  alt={product.title}
                  // fluid
                  style={{
                    objectFit: "cover",
                    maxHeight: "500px",
                  }}
                />
                <Carousel.Caption>
                  <h3>{product.title}</h3>
                  {/* <p>{product.description}</p> */}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default Home;
