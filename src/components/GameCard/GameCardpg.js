import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const List = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 15px;
  list-style: none;
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${props => props.color};
`

export const Para = styled.p`
  margin: 0px;
  font-size: small;
`

export const Img = styled.img`
  height: 300px;
  width: 200px;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    height: 200px;
    width: 150px;
  }
`
export const Navigate = styled(Link)`
  text-decoration: none;
`
