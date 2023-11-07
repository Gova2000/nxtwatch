import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import Navbar from '../Nav/nav'

import CatAlign from '../Navalign/align'

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
} from './trendingpg'

import TrendCard from '../TrendCarding/TrendCard'
import CartContext from '../../NXT.JS/Nxt'

const Constlist = {
  initial: 'INITIAL',
  progress: 'PROGESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trend extends Component {
  state = {List: [], status: Constlist.initial, is: false}

  componentDidMount() {
    this.FetchTrend()
  }

  Update = data => {
    const update = data.videos.map(each => ({
      profileImg: each.channel.profile_image_url,
      name: each.channel.name,
      id: each.id,
      date: each.published_at,
      thumbnail: each.thumbnail_url,
      title: each.title,
      Views: each.view_count,
    }))
    return update
  }

  FetchTrend = async () => {
    this.setState({status: Constlist.progress})
    const Url = 'https://apis.ccbp.in/videos/trending'

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

  loading = () => (
    <D data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </D>
  )

  failure = () => {
    const {is} = this.state

    const Src = is
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <D>
        <NoVs src={Src} alt="failure view" />
        <h1>Oops! Something Went Wrong</h1>
        <PP>We are having some trouble</PP>
        <Retry type="button" onClick={this.FetchTrend}>
          Retry
        </Retry>
      </D>
    )
  }

  success = () => {
    const {List} = this.state

    return (
      <Divele data-testid="videoItemDetails">
        <Div3>
          <AiFillFire size="36" color="red" />
          <Heading>Trending</Heading>
        </Div3>

        <UL>
          {List.map(each => (
            <TrendCard each={each} key={each.id} />
          ))}
        </UL>
      </Divele>
    )
  }

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

  Trending = () => (
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
    return <>{this.Trending()}</>
  }
}

export default Trend
