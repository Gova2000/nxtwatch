import styled from 'styled-components'

export const PlayBG = styled.div`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  width: 100%;
`

export const Play = styled.div`
  background-color: ${props => props.bgcolor};

  width: 100%;
  padding: 3vh;
`

export const Div = styled.div`
  display: flex;
  justify-content: ${props => props.colo};
  color: ${props => props.color};
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: none;
  font-weight: bold;
`

export const Divcol = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`
export const Heading = styled.h1`
  margin: 5px;
`
export const P = styled.p`
  color: ${props => props.colo};
  margin: 5px;
`
export const ProImg = styled.img`
  margin: 20px;
  height: 35px;
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
export const Retry = styled.button`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  height: 30px;
  padding: 5px;
  width: 60px;
  border-radius: 5px;
`
