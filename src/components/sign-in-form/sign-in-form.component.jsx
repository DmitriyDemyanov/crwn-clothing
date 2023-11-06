import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

import './sign-in-form.component.styles.scss';

import Button from "../button/button.component";
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [formFields,setFormFields] = useState(defaultFormFields);
  const { email,password } = formFields;

  const handleChange = (event) => {
    console.log('event.target',event.target);
    const { name,value } = event.target;

    setFormFields({ ...formFields,[name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const clickSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthWithEmailAndPassword(email,password);
      console.log(response)
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
    <div className='sing-up-container'>
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
        <div className='wrapper-sign-in-form'>
          <Button > Sign In</Button>
          <Button
            onClick={logGoogleUser}
            buttonType='google'
            type='button'
          > Sign ip with google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;