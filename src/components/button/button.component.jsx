import {
  BaseButton,
  GoogleSignButton,
  InvertedButton,
  YellowSignButton
} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
  yellow: 'yellow-button'
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
  return BaseButton;
};

const Button = ({ children,buttonType,...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps} >{children}</CustomButton>
};

export default Button;