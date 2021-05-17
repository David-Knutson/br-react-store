import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";

interface QuantityPickerProps {
  decrementQuantity: Function;
  incrementQuantity: Function;
  quantity: number;
}

const QuantityPicker: React.FC<QuantityPickerProps> = (props) => {
  console.log("RERENDER QuantityPicker");

  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="outline-secondary"
          onClick={() => props.decrementQuantity()}
        >
          <FaMinus />
        </Button>
        <Button disabled variant="secondary" style={{ width: "44px" }}>
          {props.quantity}
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => props.incrementQuantity()}
        >
          <FaPlus />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default QuantityPicker;
