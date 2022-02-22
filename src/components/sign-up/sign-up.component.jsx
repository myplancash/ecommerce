import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument  } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
// import './sign-up.styles.scss';


class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword) {
      alert("passwords don't match")
      return;
    }

    //we're gonna use a new Auth method that comes with auth library
    //destructuring the user we get back from await auth.createUserWithEmailAndPassword(email, password)
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)

      //await for this to finish
      await createUserProfileDocument(user, {displayName});

      //this will clear our form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })

    } catch(error) {
      console.error(error);
    }
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value})
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up wit your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
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
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}
export default SignUp;