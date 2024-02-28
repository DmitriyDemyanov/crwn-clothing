import styled from "styled-components";
import bgImage from "../../assets/image/bg_pixel.png";

export const TodoListContainer = styled.div`

text-align: center;
color: antiquewhite;
width: 100%;
height: 100%;
background-color: black;
display:flex;
justify-content: space-between;



.bg-image_pixel {
  width: 500px;
  height: 400px;
  background-image: url(${bgImage});
  background-size: contain;
  background-repeat: no-repeat;
}
`

export const Input = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }
`