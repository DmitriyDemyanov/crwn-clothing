import { Fragment,useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/image/crown.svg'

import { UserContext } from "../../context/user.context";
import { userSignOut } from '../../utils/firebase/firebase.utils';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// import Favorites from '../favor/favorites.component'
import { NavigationContainer,LogoContainer,NavLinksContainer,NavLink } from "./navigation.styles";

const Navigation = () => {

  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>

      <NavigationContainer >
        <LogoContainer
          to='/'>
          <Logo className='logo' />
        </LogoContainer>

        <NavLinksContainer >
          
          <NavLink to='/tv'> tv </NavLink>

          <NavLink to='/favor'>favorites</NavLink>

          <NavLink to='/shop'> SHOP</NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={userSignOut} > SIGN OUT</NavLink>
            ) : (
              <NavLink to='auth'> SIGN IN</NavLink>
            )
          }
          <CartIcon />
        </NavLinksContainer>

        <CartDropdown />
      </NavigationContainer>

      <Outlet />

    </Fragment>
  )
}

export default Navigation;