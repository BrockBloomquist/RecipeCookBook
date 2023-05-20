import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useState } from "react";
import "./CSS Pages/Login.css";
export default function Login() {
  const [checkbox, setCheckbox] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(checkbox);
    if (checkbox.checked) {
    }
  }
  return (
    <Card className="wholecard">
      <Card.Body className="card-body-login">
        <h2 className="text-center mb-4 black">Log In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Remember your username"
              onChange={(e) => setCheckbox(e.target.checked)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
