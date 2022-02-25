import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux-store";
import { authenticateUser } from "../../redux-store/actions/AuthenticationActions";
import CenteredSpinnerComponent from "../CenteredSpinner";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, authenticationData } = useSelector(
    (state: RootStore) => state.authentication
  );
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          disabled={loading}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          disabled={loading}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <div className="d-grid">
        <Button
          variant="primary"
          //   type="submit"
          size="lg"
          onClick={() => {
            dispatch(authenticateUser());
          }}
        >
          {loading ? <Spinner animation="border" /> : "Log in"}
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
