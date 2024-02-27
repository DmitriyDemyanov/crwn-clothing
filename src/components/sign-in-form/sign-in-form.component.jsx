import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

import { WrapperButtonsForm } from './sign-in-form.component.styles.jsx';

import Button,{ BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from '../form-input/form-input.component';


const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [formFields,setFormFields] = useState(defaultFormFields);
  const { email,password } = formFields;

  const handleChange = (event) => {
    const { name,value } = event.target;

    setFormFields({ ...formFields,[name]: value });
  };

  const clickSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(email,password);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-login-credentials':
          alert('invalid-login-credentials!!!');
          break;
        case 'auth/user-not-found':
          alert('invalid-login-credentials!!!');
          break;
        default:
          console.log(error)
      }

    }
  }

  return (
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={clickSubmit}>

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
          minLength='6'
        />
        <WrapperButtonsForm>
          <Button > Sign In</Button>
          <Button
            onClick={signInWithGooglePopup}
            buttonType={BUTTON_TYPE_CLASSES.yellow}
            type='button'
          >
            Sign in with google
          </Button>
        </WrapperButtonsForm>
      </form>
    </div>
  )
}

export default SignInForm;