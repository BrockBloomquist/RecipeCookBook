import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState, useRef } from "react";
import { auth } from "../firebase";
import "./CSS Pages/Login.css";
export default function Profile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await auth.signOut();
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
        <h2 className="text-center mb-4 black">Sign Out</h2>
        <Form onSubmit={handleSubmit}>
          <Button
            variant="primary"
            type="submit"
            style={{
              left: "39%",
              position: "relative",
            }}
            disabled={loading}
          >
            Sign Out
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
