import React, { useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux-store";
import { getProducts } from "../../redux-store/actions/ProductsActions";
import { ProductEntity } from "../../redux-store/actions/ProductsActionTypes";
import CenteredSpinnerComponent from "../CenteredSpinner";
import ErrorAlert from "../ErrorAlert";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state: RootStore) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <><h1>HomePage</h1>
    {loading && <CenteredSpinnerComponent/>}
    {error && <ErrorAlert errorMessage={error}/>}
    <Row>{products?.map((product:ProductEntity)=><Col key={product.id} xs={12} md={3} lg={4}><Image key={product.id} className="shadow" src={product.image} alt={product.title} fluid /></Col>)}</Row>
    </>
  );
};

export default Home;
