
import { Link } from "react-router-dom";

import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media(max-width: 600px) {
    background: linear-gradient(180deg,yellow 50%, blue 50%);
    border-radius: 5px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media(max-width: 600px) {
    padding: 10px;
  }
`
export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media(max-width: 600px) {
    width: 80%;
  }
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
