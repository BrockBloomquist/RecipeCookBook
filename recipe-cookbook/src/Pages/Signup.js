import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./CSS Pages/Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const emailConfirmRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      passwordRef.current.value !== passwordConfirmRef.current.value &&
      emailRef.current.value !== emailConfirmRef.current.value
    ) {
      return setError("Password does not match");
    }

    try {
      setError("");
      setLoading(true);
      await auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((userCredential) => {
          const user = userCredential.user;
        });
      navigate("/");
    } catch {
      setError("Failed to create an account");
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
              ref={emailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" id="confirmEmail">
            <Form.Label className="form-text">Confirm Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="e.g johndoe@gmail.com"
              ref={emailConfirmRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" id="password">
            <Form.Label className="form-text">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" id="confirmPassword">
            <Form.Label className="form-text">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordConfirmRef}
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
  );
}
