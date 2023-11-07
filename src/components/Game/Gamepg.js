import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
`

export const MediumDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`
export const UL = styled.ul`
  flex-wrap: wrap;
  display: flex;
`

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin-left: 8vh;
`

export const Heading = styled.h1`
  margin: 20px;
`

export const Divele = styled.div`
  display: flex;
  flex-direction: column;
`
export const D = styled.div`
  margin: auto;
  text-align: center;
`
export const NoVs = styled.img`
  height: 350px;
  width: 80%;
`
export const PP = styled.p`
  color: #94a3b8;
  font-weight: bold;

  @media (max-width: 576px) {
    width: 330px;
  }
`

export const Retry = styled.button`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  height: 30px;
  padding: 5px;
  width: 60px;
  border-radius: 5px;
`
