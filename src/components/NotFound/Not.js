import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
`

export const Div1 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  height: 100vh;
  align-items: center;
`
export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  text-align: center;
`
export const Img = styled.img`
  height: 400px;
  width: 100%;
`
export const PP = styled.p`
  color: #94a3b8;

  @media (max-width: 576px) {
    width: 330px;
  }
`
