import {
  BaseButton,
  GoogleSignButton,
  InvertedButton,
  YellowSignButton,
  PurpleAviaTicketSearch,
  PinkAviaTicketReset
} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
  yellow: 'yellow-button',
  purple: 'purple-button',
  pink: 'pink-button'
}

// const getButton2 = (buttonType = BUTTON_TYPE_CLASSES.base) =>
// ({
//   [BUTTON_TYPE_CLASSES.base]: BaseButton,
//   [BUTTON_TYPE_CLASSES.google]: GoogleSignButton,
//   [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
// }[buttonType]);


const getButton = (buttonType) => {
  if (buttonType === 'google-sign-in') {
    return GoogleSignButton;
  }
  if (buttonType === 'inverted') {
    return InvertedButton;
  }
  if (buttonType === 'yellow-button') {
    return YellowSignButton;
  }
  if (buttonType === 'purple-button') {
    return PurpleAviaTicketSearch;
  }
  if (buttonType === 'pink-button') {
    return PinkAviaTicketReset;
  }
  return BaseButton;
};

const Button = ({ children,buttonType,...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps} >{children}</CustomButton>
};

export default Button;