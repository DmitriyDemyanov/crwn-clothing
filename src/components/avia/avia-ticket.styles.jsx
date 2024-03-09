import styled from "styled-components";

export const AviaTicketContainer = styled.div`
  width: 100%;
  padding: 10px 15px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  color: #000;
  font-size: 18px;
  
  .icon-logo {
    display: flex;
    align-items: center;
    img {
      height: 100px;
      max-width: 100px;
      margin-right: 20px;
    }
  }
  .wrapper-destination {
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    text-transform: uppercase;
    border-bottom: 1px dashed gray;
  }
  .wrapper-time-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .time-date{
      font-size: 15px;
      font-weight: bold;
      color: gray;
    }
    .price-title{
      font-size: 25px;
      padding: 5px;
      background: #6a1b9a;
      color: #fff;
    }
  }
  .wrapper-info{
    font-size: 14px;
    font-weight: bold;
  }
 
`