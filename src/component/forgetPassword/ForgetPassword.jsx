import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

function ForgetPassword() {
  const [message,setMessage]=useState("")
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
  
    const handelSubmit = async (e) => {
      e.preventDefault();
      try {
        setError("");
        setLoading(true);
        await resetPassword(emailRef.current.value);
        setMessage("check your email")
      } catch (err) {
        setError("fail to reset password");
      }
      setLoading(false);
    };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Forget Password</h2>
          {message && <Alert variant="success">{message}</Alert>}

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handelSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" id="email" ref={emailRef} />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              disabled={loading}
            >
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login page</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center ,t-2">
        Need an account ? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default ForgetPassword;
