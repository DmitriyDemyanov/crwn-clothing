import './authenticate.styles.scss';

import SingUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
const Authenticate = () => {

  return (
    <div className='authenticate-container'>
      <SignInForm />
      <SingUpForm />
    </div>
  )
}

export default Authenticate;