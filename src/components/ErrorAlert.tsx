import React from "react";
import { Alert, AlertProps } from "react-bootstrap";

interface ErrorAlertProps extends AlertProps {
    Heading?: string;
    errorMessage: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = (props) => {
  return (
    <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {props.errorMessage}
        </p>
      </Alert>
  );
};

export default ErrorAlert;
