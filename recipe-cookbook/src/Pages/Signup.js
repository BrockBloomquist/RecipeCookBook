import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import background from "../Assets/img/LS-bg.jpg";
import "./CSS Pages/Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password does not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/");
    } catch (err) {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  function handleGoBack() {
    navigate("/");
  }
  return (
    <div className="background">
      <img src={background} className="LS-bg" alt="colorful-background" />
      <Card
        className="wholecard"
        style={{
          position: "absolute",
          left: "40%",
          transform: "translate(0px, 35%)",
        }}
      >
        <Button
          className="back-btn"
          onClick={handleGoBack}
          style={{ width: "80px" }}
        >
          Back
        </Button>
        <Card.Body className="card-body-login">
          <h2 className="text-center mb-4 black">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="email">
              <Form.Label className="form-text">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="password">
              <Form.Label className="form-text">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="confirmPassword">
              <Form.Label className="form-text">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{
                left: "39%",
                position: "relative",
              }}
              variant="primary"
              type="submit"
              disabled={loading}
            >
              Signup
            </Button>
          </Form>
        </Card.Body>
        <div>
          <h6
            style={{
              left: "25%",
              position: "relative",
            }}
          >
            Already have an account?
          </h6>
          <a
            href="/login"
            style={{
              left: "45%",
              position: "relative",
            }}
          >
            Login
          </a>
        </div>
      </Card>
    </div>
  );
}
