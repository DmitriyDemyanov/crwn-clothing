import styled from "styled-components";

import {
  BaseButton,
  GoogleSignButton,
  InvertedButton
} from '../button/button.styles'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 290px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignButton},
  ${InvertedButton} {
    margin-top: auto;
    text-transform: uppercase;
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
export const CartDropdownItem = styled.div`
    height: 270px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`
