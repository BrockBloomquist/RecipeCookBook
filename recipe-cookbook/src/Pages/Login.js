import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState, useRef } from "react";
import { auth } from "../firebase";
import "./CSS Pages/Login.css";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await auth.signInWithEmailAndPasswordAsync(emailRef, passwordRef);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
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
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-text">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
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
            disabled={loading}
          >
            Login
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
