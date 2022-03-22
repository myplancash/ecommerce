import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

// import './sign-in.styles.scss';
import { SignInContainer, SignInTitle, SignInButtons } from './sign-in.styles';
import { connect } from 'react-redux';
import { googleSignInStart } from '../../redux/user/user.actions';


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
    const  { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            autoComplete="current-password"
            required/>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            autoComplete="current-password"
            required/>
          <SignInButtons>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSingIn>
              {' '}
              Sign In With Google{' '}
              </CustomButton>
          </SignInButtons>
        </form>
      </SignInContainer>
    )

  }

}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);