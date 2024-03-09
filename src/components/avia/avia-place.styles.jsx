import styled from "styled-components";

export const AviaPlaceContainer = styled.div`
color:green;
font-size: 40px;
width: 70%;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px 2%;
`

export const PaginatedWrapper = styled.div`
  margin: 40px auto;
  display: flex;
  justify-content: center;
  .paginate-item{
    margin: 0 5px;
    min-width: 50px;
    height: 50px;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px black;
  }
  .cursor-item{
    cursor: pointer;
  }
  .scale-item{
    transition: all 0.3s;
    transform: scale(1.15);
    color: black;
    font-weight: bolder;
  }
`