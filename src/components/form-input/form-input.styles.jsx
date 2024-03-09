import styled,{ css } from "styled-components";

const subColor = 'grey';
const mainColor = 'black';

export const shrinkLabelStyles = css` // write EXPORT ???????
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`

export const InputGroup = styled.div`
  position: relative;
  margin: 45px 0;
  input[type = 'password'] {
    letter-spacing: 0.3em;
  }
`
export const FormDropdownList = styled.div`
  color: greenyellow;
  max-height: 300px;
  position: absolute;
  z-index: 99;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  top: 105%;
  right: 0;
  left: 0;
  overflow-y: auto;
  .list-item {
    font-size: 16px;
    color: #26a69a;
    padding: 14px 16px;
    min-height: 50px;
    line-height: 1.5rem;
  }

`
