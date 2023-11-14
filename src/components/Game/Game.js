import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Navbar from '../Nav/nav'

import CatAlign from '../Navalign/align'
import CartContext from '../../NXT.JS/Nxt'

import {
  Div,
  MediumDiv,
  UL,
  Divele,
  Div3,
  Heading,
  D,
  NoVs,
  PP,
  Retry,
} from './Gamepg'

import GameCard from '../GameCard/GameCard'

const Constlist = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Game extends Component {
  state = {List: [], status: Constlist.initial, is: false}

  componentDidMount() {
    this.FetchGames()
  }

  Update = data => {
    const update = data.videos.map(each => ({
      id: each.id,
      thumbnail: each.thumbnail_url,
      title: each.title,
      Views: each.view_count,
    }))
    return update
  }

  FetchGames = async () => {
    this.setState({status: Constlist.progress})
    const Url = 'https://apis.ccbp.in/videos/gaming'

    const check = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${check}`,
      },
      method: 'GET',
    }

    const response = await fetch(Url, options)

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const get = this.Update(data)
      this.setState({List: get, status: Constlist.success})
    } else {
      this.setState({status: Constlist.failure})
    }
  }

  success = () => {
    const {List} = this.state

    return (
      <Divele>
        <Div3>
          <SiYoutubegaming color="red" size="36" />
          <Heading>Gaming</Heading>
        </Div3>

        <UL>
          {List.map(each => (
            <GameCard each={each} key={each.id} />
          ))}
        </UL>
      </Divele>
    )
  }

  loading = () => (
    <D data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </D>
  )

  failure = () => (
    <CartContext.Consumer>
      {value => {
        const {isdark} = value

        const Src = isdark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <D>
            <NoVs src={Src} alt="failure view" />
            <h1>Oops! Something Went Wrong</h1>
            <PP>
              We are having some trouble to complete your request. Please try
              again.
            </PP>
            <Retry type="button" onClick={this.FetchGames}>
              Retry
            </Retry>
          </D>
        )
      }}
    </CartContext.Consumer>
  )

  result = () => {
    const {status} = this.state

    switch (status) {
      case Constlist.success:
        return this.success()
      case Constlist.failure:
        return this.failure()
      case Constlist.progress:
        return this.loading()
      default:
        return null
    }
  }

  showgames = () => (
    <CartContext.Consumer>
      {value => {
        const {isdark} = value
        const {List} = this.state
        console.log(List)

        const bgcolor = isdark ? '#0f0f0f' : '#ffffff'
        const color = isdark ? '#ffffff' : '#0f0f0f'

        return (
          <Div bgcolor={bgcolor} color={color}>
            <Navbar />
            <MediumDiv>
              <CatAlign />
              {this.result()}
            </MediumDiv>
          </Div>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.showgames()}</>
  }
}

export default Game
