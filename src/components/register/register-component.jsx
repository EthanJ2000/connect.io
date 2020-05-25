import React, { useState } from "react";
import "./register-styles.scss";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import FormButton from "../form-button/form-button-component";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Register = () => {
  const history = useHistory();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onRegisterSubmit = () => {
    alert("registered");
  };

  return (
    <div className="register-container">
      <Form className="register-form">
        <FormGroup>
          {/* Full Name */}
          <Label className="label">Full Name</Label>
          <Input
            required
            type="text"
            name="name"
            id="name-input"
            placeholder="Ken Adams"
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          {/* Email*/}
          <Label className="label">Email</Label>
          <Input
            required
            type="email"
            name="email"
            id="email-input"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          {/* Password*/}
          <Label className="label">Password</Label>
          <Input
            required
            type="password"
            name="password"
            id="password-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          {/* Confirm Password */}
          <Label className="label">Confirm Password</Label>
          <Input
            required
            type="password"
            name="confirm-password"
            id="confirm-password-input"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <FormButton
          text="Register"
          onButtonClicked={() => onRegisterSubmit()}
        />
      </Form>
      <div className="register-footer">
        {/* footer */}
        <p>Don't have an account?</p>
        <p className="login-text" onClick={() => history.push("/")}>
          &nbsp;Login
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

export default connect(null, mapDispatchToProps)(Register);
