import styled from "styled-components";

export const AviaTicketsContainer = styled.div`
  padding: 0 15%;
  max-width: 100%;
  height: 64px;
  line-height: 64px;
  background-color: #8e24aa;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  display: flex;
  justify-content:space-between;
  align-items: center;
  color: #fff;
  .wrapper-logo {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 22px;
    img{
      width: 24px;
      height: 24px;
    }
  }
  .currency-wrapper {
    cursor: pointer;
    position: relative;
    width: 150px;
    text-align: center;
    .drop-down-currency {
      width: 150px;
      height: 130px;
      text-align: center;
      
      position: absolute;
      background-color: brown;
      top: 70px;
      left: 0;
      right: 0;
      
    }
    .hide {
        display: none;
      }
  }
`

