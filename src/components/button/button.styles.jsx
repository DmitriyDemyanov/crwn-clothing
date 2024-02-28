
import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const GoogleSignButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`
export const YellowSignButton = styled(BaseButton)`
  min-width: 105px;
  height: 35px;
  line-height: 35px;
  background-color:transparent;
  border: solid 2px var(--main-todo-color);
  border-radius: 5px;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  color: var(--main-todo-color);
  text-transform: capitalize;


  &:hover {
    background-color: #357ae8;
    border: none;
  }
`