import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LoginForm from "../forms/LoginForm";

interface LoginModalProps {
  show: boolean;
  toggle: () => void;
}

const LoginModal: React.FC<LoginModalProps> = (props) => {
  const handleClose = () => {
    props.toggle();
  };
  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default LoginModal;
