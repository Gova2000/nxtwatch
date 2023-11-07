import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
`

export const List = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 15px;
`

export const Img = styled.img`
  height: 160px;
  width: 260px;
  @media (max-width: 576px) {
    height: 140px;
    width: 200px;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
`

export const Para = styled.p`
  color: ${props => props.colo};
  @media (max-width: 576px) {
    margin: 0px;
  }
`

export const Navigate = styled(Link)`
  text-decoration: none;
`
