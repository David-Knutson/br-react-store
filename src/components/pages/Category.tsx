import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RootStore } from "../../redux-store";
import { getProducts } from "../../redux-store/actions/ProductsActions";
import CenteredSpinnerComponent from "../CenteredSpinner";
import ErrorAlert from "../ErrorAlert";

interface CategoryProps {}

const Category: React.FC<CategoryProps> = () => {
  let { id } = useParams<any>();
  const history = useHistory();
  const handleClick = (id: any) => {
    history.push(`/product/${id}`);
  };

  const dispatch = useDispatch();

  const { loading, error, products } = useSelector(
    (state: RootStore) => state.products
  );

  useEffect(() => {
    dispatch(getProducts(id));
  }, [dispatch, id]);

  if (loading) {
    return <CenteredSpinnerComponent />;
  }

  if (error) {
    return <ErrorAlert errorMessage={error} />;
  }

  return (
    <>
      <h1 className="text-center">{id.toUpperCase()}</h1>
      <Row>
        {products?.map((product) => (
          <Col
            className="mt-5 d-flex align-items-stretch"
            key={product.id}
            xs={12}
            md={4}
            xl={3}
          >
            <Card className="shadow">
              <Card.Img className="p-5" variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="text-truncate">
                  {product.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer
                className="btn-primary text-center"
                onClick={() => handleClick(product.id)}
              >
                View
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Category;
