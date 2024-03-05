
import styled from "styled-components";
import { InputGroup } from '../form-input/form-input.styles';
import { ReactComponent as IconSend } from '../../assets/image/plane/send-paper.svg'
import { ReactComponent as IconDel } from '../../assets/image/plane/delete.svg'
export const AviaCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px auto;
  width: 40%;
  height: 440px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  border-radius: 2px;
  .card-content-wrapper{
    height: 340px;
    padding: 24px 24px 16px 24px;
   
    .card-title {
      display:block;
      font-size: 24px;
      font-weight: 300;
      line-height: 32px;
      margin-bottom: 8px;
    }
  }
  ${InputGroup}{
    margin: 0 0 8px;
  }
  .wrapper-button {
    padding: 0 24px;
    width: 100%;
    height: 70px;
    border-top: 1px solid rgba(160, 160, 160, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .image-btn {
    margin-left: 15px;
    height: 100%;
    display:flex;
    align-items: center;

  }
`

export const BtnIcon = styled(IconSend)`
  width: 32px;
  height: 32px;
`
export const BtnIconDel = styled(IconDel)`
  width: 32px;
  height: 32px;
`