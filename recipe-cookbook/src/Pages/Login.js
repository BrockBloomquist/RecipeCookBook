import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import "./CSS Pages/Login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState(false);
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
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
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="form-text">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="form-text">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="checkbox">
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
