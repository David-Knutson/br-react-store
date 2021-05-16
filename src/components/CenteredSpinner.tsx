import React from "react";
import { Container, Spinner } from "react-bootstrap";

const CenteredSpinnerComponent: React.FC = () => {
  return (
    <Container className="d-flex justify-content-center p-5">
      <Spinner animation="border" role="status"></Spinner>
    </Container>
  );
};

export default CenteredSpinnerComponent;
