import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

interface CheckoutDetailsCardProps {
  total: number;
  checkout: Function;
  addPromo: Function;
}

const CheckoutDetailsCard: React.FC<CheckoutDetailsCardProps> = (props) => {
  const subtotal = props.total;
  const estSalesTax = props.total * 0.07;
  const serviceFee = props.total * 0.05;
  const totalAmount = subtotal + estSalesTax + serviceFee;

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
            Confirm Payment ${totalAmount.toFixed(2)}
          </Button>
        </Card.Title>
        <Card.Text>
          <Row>
            <Col className="text-left">
              <span className="font-weight-bold">Subtotal</span>
            </Col>
            <Col className="text-right">
              <span>{subtotal.toFixed(2)}</span>
            </Col>
          </Row>
        </Card.Text>
        <Card.Text>
          <Row>
            <Col className="text-left">
              <span className="font-weight-bold">Est. Sales tax</span>
            </Col>
            <Col className="text-right">
              <span>{estSalesTax.toFixed(2)}</span>
            </Col>
          </Row>
        </Card.Text>
        <Card.Text>
          <Row>
            <Col className="text-left">
              <span className="font-weight-bold">Service fee</span>
            </Col>
            <Col className="text-right">
              <span>{serviceFee.toFixed(2)}</span>
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
              <span>{totalAmount.toFixed(2)}</span>
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
              <span>$0.00</span>
            </Col>
          </Row>
          <hr />
        </Card.Text>
        <Button
          block
          className="text-center text-success"
          variant="link"
          onClick={() => props.addPromo()}
        >
          Add promo or gift card
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CheckoutDetailsCard;
