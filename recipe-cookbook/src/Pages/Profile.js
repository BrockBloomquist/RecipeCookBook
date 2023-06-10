import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import "./CSS Pages/Login.css";
export default function Profile() {
  const test = getAuth();
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logout, updatePassword } = useAuth();
  async function handleUpdatePassword(e) {
    if (password != confirmPassword) {
      return setError("Invalid password");
    }
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await updatePassword(password);
      setPasswordChanged(true);
      navigate("/profile");
    } catch (e) {
      setError("Failed to change password");
      console.log(e);
    }
    setLoading(false);
  }
  async function handleSignOut(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
    setLoading(false);
  }
  function handleGoBack() {
    navigate(-1);
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
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleUpdatePassword}>
          <Form.Group className="mb-3" id="password">
            <Form.Label className="form-text">New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className={passwordChanged ? "" : ""}
            id="confirmPassword"
          >
            <Form.Label className="form-text">Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm New Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          {passwordChanged && (
            <Alert variant="success">Your password has been changed!</Alert>
          )}
          <Button
            variant="primary"
            type="submit"
            style={{
              left: "30%",
              marginTop: "10%",
              marginBottom: "5%",
              position: "relative",
            }}
            disabled={loading}
          >
            Update Password
          </Button>
        </Form>
        <Form onSubmit={handleSignOut}>
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
