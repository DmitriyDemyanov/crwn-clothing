import { createContext,useEffect,useReducer } from 'react'
//useState????
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state,action) => {
  // console.log('dispatched')
  // console.log('action____',action);
  const { type,payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, //чтобы взять весь объект , но изменить только   currentUser????
        currentUser: payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
}

const INITIAL_STATE = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {

  const [{ currentUser },dispatch] = useReducer(userReducer,INITIAL_STATE);
  // console.log('currentUser',currentUser)

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER,payload: user });
  }


  const value = { currentUser,setCurrentUser };

  useEffect(() => {
    onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    })
  },[])

  return (
    <UserContext.Provider
      value={value}
    >
      {children}
    </UserContext.Provider>)
}



