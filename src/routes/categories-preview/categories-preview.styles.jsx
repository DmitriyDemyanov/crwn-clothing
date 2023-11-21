import styled from "styled-components";

export const CategoriesTitle = styled.h2`
  font-size: 28px;
  margin-top: 30px;
  margin-bottom: 25px;
  cursor: pointer; 
`

export const CategoriesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 20px;
`