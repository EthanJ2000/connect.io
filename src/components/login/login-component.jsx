import React, { useState } from "react";
import "./login-styles.scss";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import FormButton from "../form-button/form-button-component";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginSubmit = () => {
    alert(email + " " + password);
  };

  return (
    <div className="login-container">
      <Form className="login-form">
        <FormGroup>
          <Label className="label">Email</Label>
          <Input
            type="email"
            name="email"
            id="email-input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label className="label">Password</Label>
          <Input
            type="password"
            name="password"
            id="password-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormButton text="Sign In" onButtonClicked={() => onLoginSubmit()} />
      </Form>
      <div className="login-footer">
        {/* footer */}
        <p>Don't have an account?</p>
        <p className="register-text" onClick={() => history.push("/register")}>
          &nbsp;Register
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: () => {
      dispatch({ type: "set_auth_status", authenticated: true });
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
