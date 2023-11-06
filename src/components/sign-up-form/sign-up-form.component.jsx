import { useState } from 'react';
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-up-form.styles.scss'



const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

// const inputFormSingUp = [
//   {
//     label: 'Display Name',
//     type: 'text',
//     required: 'required',
//     name: 'displayName',
//   },
//   {
//     label: 'Email',
//     type: 'email',
//     required: 'required',
//     name: 'email',
//   },
//   {
//     label: 'Password',
//     type: 'password',
//     required: 'required',
//     name: 'password',
//     minLength: '6',

//   },
//   {
//     label: 'Confirm Password',
//     type: 'password',
//     required: 'required',
//     name: 'confirmPassword',
//     minLength: '6'
//   }
// ]



const SingUpForm = () => {

  const [formFields,setFormFields] = useState(defaultFormFields);
  const { displayName,email,password,confirmPassword } = formFields;

  const handleChange = (event) => {
    console.log('event.target',event.target);
    const { name,value } = event.target;

    setFormFields({ ...formFields,[name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password,confirmPassword,email,displayName } = formFields
    if (password !== confirmPassword) {
      alert('password do not match');
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email,password);
      const userDocRef = await createUserDocumentFromAuth({ ...user,displayName });
      console.log(userDocRef);
      setFormFields(defaultFormFields);
    } catch (error) {
      let message = error.message;
      if (error.message.includes('email-already-in-use')) {
        message = 'User AlReady use!!!!!';
      }
      alert(message);
    }

  };

  return (
    <div className='sing-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with you email and password</span>

      <form onSubmit={handleSubmit}>
        {/* {
          inputFormSingUp.map((input) => (
            <FormInput
              {...input}
              onChange={handleChange}
              value={formFields[input.name]}
              key={input.name}
            />
          ))
        } */}
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          minLength='6'
        />



        <Button type='submit' > Sign Up</Button>

      </form>
    </div>
  )
}

export default SingUpForm;
