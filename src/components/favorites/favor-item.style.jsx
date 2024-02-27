import styled from 'styled-components'

export const FavorItemContainer = styled.div`

 display: flex;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  height: 300px;
  
  .favor-image{
    width:30%;
    height: 300px;
    background-image: ${({ imageurl }) => `url(${imageurl})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .favor-descr {
    width: 70%;
    height: 100%;
    padding-right: 2%;
    display: grid;
    align-content:center;
    grid-template-columns: 1fr 1fr 20%;
    grid-column-end: 50px;
    background: linear-gradient( 
        171deg,
        rgba(123, 112, 215, 0.863) 39%,
        rgb(13, 194, 230) 96%
      );
  }
`

