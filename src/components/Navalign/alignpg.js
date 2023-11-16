import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => props.bgcolor};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  padding: 15px;
  width: 300px;
  @media (max-width: 576px) {
    display: none;
  }
`

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Itemdiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  color: ${props => props.bgcolor};
`

export const Catbutton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.bgcolor};
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  margin: 10px;
  cursor: 'pointer';
`
export const Para = styled.p`
  font-weight: bold;
  color: ${props => props.bgcolor};
  margin: 5px;
  width: 200px;
`

export const IMG = styled.img`
  height: 30px;
  margin: 10px;
`
