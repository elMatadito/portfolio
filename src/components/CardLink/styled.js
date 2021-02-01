import styled from 'styled-components'

export const CardLinkContainer = styled.div`
  background: #172A45;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 50px auto;
  grid-gap: 20px; 
  cursor: pointer;

  img{
    width: 50px;
    height: 50px;
    background: #F8F8F8;
    border-radius: 8px;
  }
`