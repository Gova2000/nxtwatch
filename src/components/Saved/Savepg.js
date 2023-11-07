import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
`

export const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 8vh;
`

export const UL = styled.ul`
  flex-wrap: wrap;
  display: flex;
`

export const Heading = styled.h1`
  margin: 20px;
`

export const Para = styled.p`
  margin: 10px;
`
export const D = styled.div`
  margin: auto;
  text-align: center;
`
export const NoVs = styled.img`
  height: 400px;
  width: 100%;
`
export const PP = styled.p`
  color: #94a3b8;
  font-weight: bold;

  @media (max-width: 576px) {
    width: 330px;
  }
`
