import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import "./CSS Pages/Profile.css";
export default function Profile() {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logout, changePassword } = useAuth();
  async function handleUpdatePassword(e) {
    if (password !== confirmPassword) {
      return setError("Invalid password");
    }
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      setPasswordChanged(true);
      await changePassword(password);
      navigate("/profile");
    } catch (e) {
      setError("Failed to change password");
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
        <h2 className="text-center mb-5 black">Sign Out</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleUpdatePassword}>
          <div className={passwordChanged ? "changedPassword" : ""}>
            <h3>Change your password</h3>
            <Form.Group id="password">
              <Form.Label className="form-text">New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="confirmPassword">
              <Form.Label className="form-text">
                Confirm New Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm New Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

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
          </div>
          {passwordChanged && (
            <Alert variant="success">Your password has been changed!</Alert>
          )}
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
