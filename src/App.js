import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgetPassword from "./component/forgetPassword/ForgetPassword";
import Home from "./component/home/Home";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Update from "./component/updateProfile/Update";
import AuthProvider from "./context/AuthContext";
import { RequireAuth } from "./context/RequieredAuth";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/update-profile" element={<Update />} />

              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
