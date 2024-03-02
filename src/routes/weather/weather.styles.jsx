import styled from "styled-components";


export const MainWeatherContainer = styled.div`
  margin: 0 auto;
  padding: 15px 0 22px 24px;
  width: 780px;
  height: 330px;
  background-color: rgba(68, 68, 68, 1);
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  display: grid;
  grid-template-columns: 30% 40% 30%;

  .column-1 {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: #fff;
    /* :first-child{
      color: blue;
    } */
    .main-temperature {
      font-size: 80px;
      font-weight: 700;
      line-height: 90px;
      opacity: 0.8;
    }
    .feel-temperature {
      opacity: 0.8;
      :first-child{
        font-size: 32px;
        font-weight: 600;
        line-height: 50px;
      }
    }
    .solar-cycle-container {
      margin-top: 26px;
      padding-left: 26px;
      .solar-item {
        margin-top: 10px;
        display: flex;
        align-items: center;
        :first-child{
          margin-right: 10px;
        }
        .solar-time {
          font-size: 16px;
        }
      }
    }
  }
  .column-2 {
    img {
      width: 240px;
      height: 240px;
    }
    font-family: Poppins;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;

  }
  .column-3 {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 17px 13px;
    color: #fff;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
    img {
      width: 60px;
      height: 60px;
    }
    .item-container {
      :last-child {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      }
    }

  }

`