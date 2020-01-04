import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault(); // prevent the default submit of the form
    const { displayName, email, password, confirmPassword } = this.state;

    // check for matching passwords
    if (password !== confirmPassword) {
      alert("Password don't match!");
      return; // return from this function
    }

    try {
      // get the user from the create user with the email and password (user auth obj)
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // wait for the user to be created
      await createUserProfileDocument(user, { displayName });

      // clear the form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="ConfirmPassword"
            required
          />
          <CustomButtom type="submit">SIGN UP</CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignUp;
