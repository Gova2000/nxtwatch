import {Link, withRouter} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import CartContext from '../../NXT.JS/Nxt'

import {Itemdiv, Div, Div2, Catbutton, Para, IMG} from './alignpg'

import './index.css'

const CatAlign = () => (
  <CartContext.Consumer>
    {value => {
      const {isdark, activetabitem, activetab} = value

      const bgcolor = isdark ? '#181818' : '#ffffff'

      const color = isdark ? '#ffffff' : '#0f0f0f'

      const red1 = activetab === 'HOME' ? '#ff0000' : color
      const red2 = activetab === 'TRENDING' ? '#ff0000' : color
      const red3 = activetab === 'GAMING' ? '#ff0000' : color
      const red4 = activetab === 'SAVED' ? '#ff0000' : color

      const homebtn = () => {
        activetabitem('HOME')
      }

      const trendbtn = () => {
        activetabitem('TRENDING')
      }

      const gamebtn = () => {
        activetabitem('GAMING')
      }

      const savebtn = () => {
        activetabitem('SAVED')
      }

      return (
        <>
          <Div bgcolor={bgcolor}>
            <Div2>
              <Link className="Link" to="/">
                <Itemdiv bgcolor={bgcolor}>
                  <Catbutton type="button" bgcolor={red1} onClick={homebtn}>
                    <AiFillHome size="16" />
                    <Para bgcolor={color}>Home</Para>
                  </Catbutton>
                </Itemdiv>
              </Link>

              <Link className="Link" to="/trending">
                <Itemdiv bgcolor={bgcolor}>
                  <Catbutton type="button" bgcolor={red2} onClick={trendbtn}>
                    <AiFillFire size="16" />
                    <Para bgcolor={color}>Trending</Para>
                  </Catbutton>
                </Itemdiv>
              </Link>

              <Link className="Link" to="/Gaming">
                <Itemdiv bgcolor={bgcolor}>
                  <Catbutton type="button" bgcolor={red3} onClick={gamebtn}>
                    <SiYoutubegaming size="16" />
                    <Para bgcolor={color}>Gaming</Para>
                  </Catbutton>
                </Itemdiv>
              </Link>

              <Link className="Link" to="/saved-videos">
                <Itemdiv bgcolor={bgcolor}>
                  <Catbutton type="button" bgcolor={red4} onClick={savebtn}>
                    <MdPlaylistAdd size="16" />
                    <Para bgcolor={color}>Saved videos</Para>
                  </Catbutton>
                </Itemdiv>
              </Link>
            </Div2>
            <Div2>
              <Para bgcolor={color}>CONTACT US</Para>
              <Itemdiv>
                <IMG
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IMG
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />

                <IMG
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </Itemdiv>

              <Para bgcolor={color}>
                Enjoy! Now to see your channels and recommendations!
              </Para>
            </Div2>
          </Div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(CatAlign)
