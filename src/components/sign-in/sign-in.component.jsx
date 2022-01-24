import React from "react";

import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      })
    } catch(error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({ [name]: value })
    console.log(`${[name]}: ${value}`)
  }

  render() {

    return (
      <div className  ="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required/>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required/>
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSingIn>
              {' '}
              Sign In With Google{' '}
              </CustomButton>
          </div>
        </form>
      </div>
    )

  }








}

export default SignIn;