import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {BsMoon} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import CatAlign from '../Navalign/align'

import {
  Navmainbg,
  Navdiv,
  Logoutbutton,
  IMG,
  Colorbtn,
  PopButton,
  Divrowbtns,
  Popout,
  Divcol,
} from './navbar'
import CartContext from '../../NXT.JS/Nxt'

class Navbar extends Component {
  state = {toggleget: false}

  up = () => {
    this.setState(prev => ({toggleget: !prev.toggleget}))
  }

  Nav = () => (
    <CartContext.Consumer>
      {value => {
        const {isdark, theam} = value

        const logout = () => {
          const {history} = this.props
          Cookies.remove('jwt_token')

          history.replace('/login')
        }

        const Pop = () => (
          <>
            <Popout
              modal
              trigger={
                <Logoutbutton
                  type="button"
                  dis
                  play={isdark}
                  data-testid="iconButton"
                >
                  Logout
                </Logoutbutton>
              }
            >
              {close => (
                <Divcol>
                  <Divcol>
                    <p>Are you sure, you want to logout?</p>
                  </Divcol>

                  <Divrowbtns>
                    <PopButton type="button" onClick={() => close()}>
                      Cancel
                    </PopButton>
                    <PopButton type="button" onClick={logout}>
                      Confirm
                    </PopButton>
                  </Divrowbtns>
                </Divcol>
              )}
            </Popout>

            <Popout
              modal
              trigger={
                <Logoutbutton
                  type="button"
                  play={isdark}
                  data-testid="iconButton"
                >
                  <FiLogOut />
                </Logoutbutton>
              }
            >
              {close => (
                <Divcol>
                  <Divcol>
                    <p>Are you sure you want to logout?</p>
                  </Divcol>

                  <Divrowbtns>
                    <PopButton type="button" onClick={() => close()}>
                      cancel
                    </PopButton>
                    <PopButton type="button" onClick={logout}>
                      Confirm
                    </PopButton>
                  </Divrowbtns>
                </Divcol>
              )}
            </Popout>
          </>
        )

        const bg = isdark ? '#181818' : '#ffffff'

        const LOGO = isdark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const theam1 = () => {
          theam()
        }

        const Btntext = isdark ? <FiSun size="25" /> : <BsMoon size="25" />

        return (
          <Navmainbg bgcolor={bg}>
            <IMG src={LOGO} alt="website logo" />
            <Navdiv as="li">
              <Colorbtn
                type="button"
                onClick={theam1}
                play={isdark}
                data-testid="theme"
              >
                {Btntext}
              </Colorbtn>

              <IMG
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                dis
              />
              <Logoutbutton type="button" play={isdark}>
                <GiHamburgerMenu />
              </Logoutbutton>

              {Pop()}
            </Navdiv>
          </Navmainbg>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.Nav()}</>
  }
}

export default withRouter(Navbar)
