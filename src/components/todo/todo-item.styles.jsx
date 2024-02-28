import styled from "styled-components";



export const ItemContainer = styled.div`
margin-top: 30px;
color: rgba(255, 255, 255, 0.9);
font-family: Calibri, sans-serif;
font-weight: 400;
font-size:20px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: solid 1px var(--main-todo-color);

.quantity-item {
  display: block;
  margin-left: 21px;
  margin-right: 15px;
  width: 30px;
  height: 30px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: var(--main-todo-color);
  font-family: Calibri, sans-serif;
  font-weight: 700;
  font-size: 16px; 
  color: #000;
}
`