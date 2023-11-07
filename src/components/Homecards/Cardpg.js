import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const List = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: ${props => props.color};
`

export const Img = styled.img`
  width: 300px;
  height: 160px;
`

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  flex-wrap: wrap;
`
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const ProImg = styled.img`
  margin: 20px;
  height: 35px;
`

export const Name = styled.p`
  width: 250px;
  margin: 5px;
`
export const Navigate = styled(Link)`
  text-decoration: none;
`
