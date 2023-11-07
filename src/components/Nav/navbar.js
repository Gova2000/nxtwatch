import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import styled from 'styled-components'

export const Navmainbg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  height: 50px;
  background-color: ${props => props.bgcolor};
`

export const Navdiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100px;
  flex-direction: row;
`

export const Logoutbutton = styled.button`
  color: ${props => (props.play ? '#ffffff' : ' #3b82f6')};
  background-color: transparent;
  border: ${props => (props.play ? '2px solid #ffffff' : '2px solid #3b82f6')};
  height: 30px;
  padding: 5px;
  display: ${props => (props.dis ? 'block' : 'none')};
  margin: 10px;
  width: 70px;
  @media (max-width: 576px) {
    display: ${props => (props.dis ? 'none' : 'block')};
    border: none;
    color: ${props => (props.play ? '#ffffff' : '#0f0f0f')};
    margin: 0px;
  }
`

export const Colorbtn = styled.button`
  color: ${props => props.play && '#ffffff'};
  background-color: transparent;
  border: none;

  height: 30px;
  padding: 5px;
`

export const IMG = styled.img`
  height: 35px;
  margin: 10px;
  @media (max-width: 576px) {
    display: ${props => props.dis && 'none'};
    margin: 0px;
  }
`
export const PopButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  height: 30px;
  padding: 5px;
  width: 80px;
  border-radius: 4px;
`

export const Divcol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 5vh;
  width: 350px;
  text-align: center;
  @media (max-width: 576px) {
    width: 220px;
    padding: 1vh;
  }
`
export const Divrowbtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  @media (max-width: 576px) {
    width: 200px;
  }
`
export const Popout = styled(Popup)`
  width: 150px;
`
