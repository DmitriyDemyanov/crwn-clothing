import styled from "styled-components";

import { ReactComponent as imgIcon } from '../../assets/image/movie/play.svg'


export const IconPlay = styled(imgIcon)`
position:absolute;
bottom: 22.5%;
right: 26px;
`

export const TvItemContainer = styled.div`
margin-top: 30px;
position: relative;
width: 300px;
height: 440px;
background-color: #fff;
border-radius: 10px;
 
.image-movie
 {
  width: 300px;
  height: 312px;
  border-radius: 10px 10px 0 0;
  /* background-position: 100% 100%; */
  background-repeat: no-repeat;
  background-size: cover;
  
}

.tv-item-content {
  position: absolute;
  bottom: 0px;
  right: 0;
  left: 0;
  padding: 24px 26px 28px;
  font-family: Montserrat, sans-serif;
  color: green;
  a{
    color:green;
  }
}

.title-movie {
  font-size: 18px;
  font-weight: 500;
 
}
.subtitle-movie {
  padding-top: 8px;
  padding-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
}

.description-movie {
  display:flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  
  :first-child {
    padding: 5px 12px 5px 0;
    /* border-right: solid 1px rgba(17, 17, 17, 0.5); */
  }
  :nth-child(2) {
    width: 1px;
    height: 10px;
    background-color: rgba(17, 17, 17, 0.5);
  }
  :last-child {
    padding: 5px 0 5px 12px;
  }
}
   /* .image-movie:hover{
    /* background-position-y: -100%; */
    /* background-repeat: no-repeat;
    height: 100%;
    border-radius: 7px;
    background-size: center; 
    transition: 1s linear;
    .tv-item-content.title-movie{
      color:red;
    }
  } */ 

  &:hover {
    .image-movie{
    /* background-position-y: -100%; */
    background-repeat: no-repeat;
    height: 100%;
    border-radius: 7px;
    background-size: center; 
    transition: 1s linear;
  }
    .tv-item-content{
      color:#fff;
      a {
        color: #fff;
      }
    }
     ${IconPlay} {
      width:80px;
      height: 80px;
      top: calc(50% - 40px);
      left: calc(50% - 40px);
      transform:scale(1);
      transition: all 2s;
    }
   .description-movie {
     :nth-child(2) {
        background-color: #fff;
      }
    }
  }
`


