/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Homebg = styled.div`
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  height: 100vh;
`

export const Bothdiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
`

export const RightDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
`

export const Primecard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 1210px;
  height: 300px;
  padding: 5vh;
  @media (max-width: 576px) {
    width: 400px;
    height: 300px;
  }
`

export const Colorbtn = styled.button`
  background-color: transparent;
  border: none;

  height: 30px;
  padding: 5px;
`
export const Cardclose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const IMAGE = styled.img`
  height: 35px;
  margin: 10px;
`

export const Primebutton = styled.button`
  color: ${props => (props.play ? '#ffffff' : ' ##1e293b')};
  border: ${props => (props.play ? '2px solid #ffffff' : '2px solid ##1e293b')};
  height: 40px;
  width: 100px;
  padding: 5px;
  font-weight: bold;
  background-color: transparent;
`
export const Description = styled.p`
  color: ${props => (props.play ? '#ffffff' : ' ##1e293b')};
  width: 42%;
  font-size: large;
`
export const CardList = styled.ul`
  margin-left: 0px;
  flex-wrap: wrap;
  display: flex;
`

export const Input = styled.div`
  background-color: ;
  height: 35px;
  width: 400px;
  border: 2px solid #dcdcdc;
  padding-left: 15px;
  border-radius: 6px;
  margin: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    width: 250px;
  }
`
export const HR = styled.hr`
  height: 35px;
  color: #dcdcdc;
`

export const Icon = styled.button`
  width: 100px;
  background-color: #dcdcdc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  opacity: 0.5;
  height: 100%;
`

export const Inp = styled.input`
  background-color: transparent;
  padding-right: 15px;
  border: none;
  width: 300px;
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
