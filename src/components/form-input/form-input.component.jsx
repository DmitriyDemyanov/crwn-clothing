

import { Input,InputGroup,FormInputLabel } from './form-input.styles'


const FormInput = (props) => {
  const { label,...otherProps } = props;

  return (
    <InputGroup>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value}>
          {label}
        </FormInputLabel>
      )}
    </InputGroup>
  )
}

export default FormInput;