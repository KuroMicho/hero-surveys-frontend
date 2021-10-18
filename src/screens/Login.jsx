import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { login, useAuthState, useAuthDispatch } from "../context";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const handleLogin = async (e) => {
    e.preventDefault();
    let payload = { email, password };
    try {
      let response = await login(dispatch, payload);
      if (!response.username) return;
      props.history.push("/surveys");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{errorMessage}</p>
        </Alert>
      )}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={loading}
          onClick={() => setShow(true)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
