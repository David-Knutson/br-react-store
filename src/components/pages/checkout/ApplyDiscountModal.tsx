import React from "react";
import { Button, Col, Form, Modal, ModalProps, Row } from "react-bootstrap";

interface ApplyDiscountModalProps extends ModalProps {}

const ApplyDiscountModal: React.FC<ApplyDiscountModalProps> = (props) => {
  return (
    <Modal {...props}>
      <Modal.Header
        className="text-center"
        closeButton
        style={{
          borderBottom: "0 none",
        }}
      >
        <Modal.Title className="ml-4 mt-5 w-100">
          <Row>
            <Col>
              <h2 className="font-weight-bold">Add Promo or Gift Card</h2>
            </Col>
          </Row>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mx-5">
          <Col>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Promo or Gift Card" />
              </Form.Group>
              <div className="d-grid mt-3">
                <Button size="lg" variant="primary" onClick={() => {}}>
                  Redeem
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer
        style={{
          borderTop: "0 none",
        }}
      >
        <div className="d-grid">
          <Button className="text-center text-success mb-3" variant="link">
            Terms & Conditions apply
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyDiscountModal;
