

import { Input,InputGroup,FormInputLabel,FormDropdownList } from './form-input.styles'

const FormInput = (props) => {
  const {
    onDropListClick = () => { },
    dropdownList = [],
    label,
    ...otherProps
  } = props;

  return (
    <InputGroup>
      <Input {...otherProps} />
      <FormDropdownList>
        {
          dropdownList.map((text,ind) => (
            <div onClick={() => onDropListClick(text,otherProps.name)} className='list-item' key={ind}> {text}</div>
          ))
        }
      </FormDropdownList>
      {label && (
        <FormInputLabel shrink={otherProps.value}>
          {label}

        </FormInputLabel>
      )}
    </InputGroup>
  )
}

export default FormInput;