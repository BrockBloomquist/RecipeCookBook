import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import "./CSS Pages/Login.css";
export default function Login() {
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(checkbox);
    if (checkbox.checked) {
    }
  }
  function handleGoBack() {
    navigate("/");
  }
  return (
    <Card className="wholecard">
      <Button
        className="back-btn"
        onClick={handleGoBack}
        style={{ width: "80px", paddingRight: "5px", paddingLeft: "5px" }}
      >
        Back
      </Button>
      <Card.Body className="card-body-login">
        <h2 className="text-center mb-4 black">Log In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-text">Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-text">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Remember your username"
              className="form-text"
              onChange={(e) => setCheckbox(e.target.checked)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              left: "39%",
              position: "relative",
            }}
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
      <div>
        <h6
          style={{
            position: "relative",
            left: "28%",
          }}
        >
          Forgot your password?
        </h6>
        <a
          className="primary"
          style={{
            position: "relative",
            left: "34%",
            color: "primary",
          }}
        >
          Reset Password
        </a>
      </div>
    </Card>
  );
}
