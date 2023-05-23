import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CSS Pages/Signup.css";
export default function Signup() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-text">Email address</Form.Label>
            <Form.Control type="email" placeholder="e.g johndoe@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-text">Confirm Email address</Form.Label>
            <Form.Control type="email" placeholder="e.g johndoe@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-text">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-text">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button
            style={{
              left: "39%",
              position: "relative",
            }}
            variant="primary"
            type="submit"
          >
            Submit
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
