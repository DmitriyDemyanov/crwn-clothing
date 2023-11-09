import { Fragment,useContext } from "react";
import { Outlet,Link } from "react-router-dom";

import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/image/crown.svg'

import { UserContext } from "../../context/user.context";
import { userSignOut } from '../../utils/firebase/firebase.utils';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <Fragment>
     
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <Logo className='logo' />
          </Link>

          <div className="nav-links-container">
            <Link className='nav-link' to='/shop'> SHOP</Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={userSignOut} > SIGN OUT</span>
              ) : (
                <Link className='nav-link' to='auth'> SIGN IN</Link>
              )
            }

            <Link className='nav-link' to='/shop'> Shop</Link>
            <CartIcon />
        </div>
        
          <CartDropdown />
      </div>
      


        <Outlet />
      
    </Fragment>
  )
}

export default Navigation;