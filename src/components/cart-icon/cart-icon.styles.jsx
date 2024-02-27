
import styled from "styled-components";
import { ReactComponent as Cart } from '../../assets/image/shopping-bag.svg';
export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const CartCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`
export const CartImage = styled(Cart)`
  width: 24px;
  height: 24px;
`
