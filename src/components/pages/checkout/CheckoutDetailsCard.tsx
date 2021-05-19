import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

interface CheckoutDetailsCardProps {
  total: number;
  checkout: Function;
  addPromo: Function;
}

const CheckoutDetailsCard: React.FC<CheckoutDetailsCardProps> = (props) => {
  return (
    <Card className="shadow-lg">
      <Card.Body>
        <Card.Title>
          <Button
            block
            size="lg"
            variant="primary"
            onClick={() => props.checkout()}
          >
            Confirm Payment ${props.total.toFixed(2)}
          </Button>
        </Card.Title>
        <Card.Text>
          <Row>
            <Col className="text-left">
              <span className="font-weight-bold">Subtotal</span>
            </Col>
            <Col className="text-right">
              <span>90.90</span>
            </Col>
          </Row>
        </Card.Text>
        <Card.Text>
          <Row>
            <Col className="text-left">
              <span className="font-weight-bold">Est. Sales tax</span>
            </Col>
            <Col className="text-right">
              <span>90.90</span>
            </Col>
          </Row>
        </Card.Text>
        <Card.Text>
          <Row>
            <Col className="text-left">
              <span className="font-weight-bold">Service fee</span>
            </Col>
            <Col className="text-right">
              <span>90.90</span>
            </Col>
          </Row>
        </Card.Text>
        <hr />
        <Card.Text>
          <Row>
            <Col className="text-left">
              <span className="font-weight-bold">Total</span>
            </Col>
            <Col className="text-right">
              <span>90.90</span>
            </Col>
          </Row>
        </Card.Text>
        <Card.Text>
          <Row>
            <Col className="text-left">
              <span className="font-weight-bold text-primary">
                Total Savings
              </span>
            </Col>
            <Col className="text-right">
              <span>90.90</span>
            </Col>
          </Row>

          <hr />
          <Button
            block
            className="text-center text-success"
            variant="link"
            onClick={() => props.addPromo()}
          >
            Add promo or gift card
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CheckoutDetailsCard;
