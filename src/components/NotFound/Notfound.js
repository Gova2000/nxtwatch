import Navbar from '../Nav/nav'

import CatAlign from '../Navalign/align'

import CartContext from '../../NXT.JS/Nxt'

import {Div, Div1, Img, Div2, PP} from './Not'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isdark} = value

      const bgcolor = isdark ? '#0f0f0f' : '#ffffff'
      const color = isdark ? '#ffffff' : '#0f0f0f'
      const Src = isdark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <Div bgcolor={bgcolor} color={color}>
          <Navbar />
          <Div1>
            <CatAlign />
            <Div2>
              <Img src={Src} alt="not found" />
              <h1>Page Not Found</h1>
              <PP>we are sorry, the page you requested could not be found</PP>
            </Div2>
          </Div1>
        </Div>
      )
    }}
  </CartContext.Consumer>
)

export default NotFound
