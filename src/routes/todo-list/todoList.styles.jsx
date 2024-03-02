import styled from "styled-components";
import bgImage from "../../assets/image/bg_pixel.png";

export const TodoListContainer = styled.div`
margin: 0 auto;
text-align: center;
color: antiquewhite;
height: 100vh;
min-height: 500px;
background-color: black;
display:flex;
align-items:center;
justify-content: space-around;

.wrapper-todo {
  min-width: 438px;
  width: 25%;
  /* height: 653px; */
  height: 80%;
  padding: 19px 30px 19px 23px;
  background: rgba(245, 245, 220, 0.35);
  border-radius: 30px;
}

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


.bg-image_pixel {
  width: 732px;
  /* height:735px; */
  height: 80%;
  background-image: url(${bgImage});
  background-size:contain;
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