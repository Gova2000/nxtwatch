import Navbar from '../Nav/nav'

import CatAlign from '../Navalign/align'

import CartContext from '../../NXT.JS/Nxt'

import TrendCard from '../TrendCarding/TrendCard'

import {Div, Div2, Para, Div1, Heading, UL, D, NoVs, PP} from './Savepg'

const Save = () => (
  <CartContext.Consumer>
    {value => {
      const {isdark, savedList} = value

      console.log(savedList)

      const bgcolor = isdark ? '#0f0f0f' : '#ffffff'
      const color = isdark ? '#ffffff' : '#0f0f0f'

      return (
        <Div1 bgcolor={bgcolor} color={color}>
          <Navbar />
          <Div>
            <CatAlign />
            <Div1>
              {savedList.length !== 0 ? (
                <>
                  <Div2>
                    <Para>mklml</Para>
                    <Heading>Saved Videos</Heading>
                  </Div2>

                  <UL>
                    {savedList.map(each => (
                      <TrendCard each={each} key={each.id} />
                    ))}
                  </UL>
                </>
              ) : (
                <D>
                  <NoVs
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <Heading>No saved videos found here</Heading>
                  <PP>You can save your videos while watching them</PP>
                </D>
              )}
            </Div1>
          </Div>
        </Div1>
      )
    }}
  </CartContext.Consumer>
)

export default Save
