import styled from "styled-components";
import bgImage from "../../assets/image/bg_pixel.png";
import bgTodo from "../../assets/image/BG_container.png"

export const TodoListContainer = styled.div`
margin: 0 auto;
text-align: center;
color: antiquewhite;
width: 1366px;
height: 768px;
background-color: black;
display:flex;
align-items:center;
justify-content: space-around;

.todo-title {
  margin-bottom: 36px;
  font-size: 45px;
  text-align: center;
  text-transform: capitalize;

}

.wrapper-form {
  min-height: 35px;
  display: grid;
  grid-template-columns: 42% 20% 20%;
  column-gap: 14px;
  align-items: center;
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    appearance: none; 
  }
  input[type=number] {
    text-align: center;
  }
}

.wrapper-todo {
  width: 438px;
  height: 653px;
  padding: 26px 46px 26px 40px;
  background-image: url(${bgTodo});
  background-size: cover;
  background-position: center;
  border-radius: 30px;
}


.bg-image_pixel {
  width: 732px;
  height:735px;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
}
`

export const Input = styled.input`
  background: none;
  background-color: rgba(255, 255, 255, 0.6);
  color: rgba(33, 33, 33, 0.7);
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 300;
  padding: 5px;
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 3px;
  border-bottom: 1px solid grey;


  &:focus {
    outline: none;
  }
`