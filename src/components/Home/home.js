import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import Navbar from '../Nav/nav'

import {
  Homebg,
  Bothdiv,
  RightDiv,
  Colorbtn,
  Primecard,
  Cardclose,
  IMAGE,
  Description,
  Primebutton,
  CardList,
  Input,
  Inp,
  HR,
  Icon,
  D,
  NoVs,
  PP,
  Retry,
} from './homepg'

import CartContext from '../../NXT.JS/Nxt'

import CatAlign from '../Navalign/align'

import Cards from '../Homecards/Card'

const Constlist = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    List: [],
    getdata: '',
    tog: false,
    Url: 'https://apis.ccbp.in/videos/',

    status: Constlist.initial,
    is: false,
  }

  componentDidMount() {
    this.Fetch()
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

  Fetch = async () => {
    const {Url, status} = this.state
    const check = Cookies.get('jwt_token')
    this.setState({status: Constlist.progress})

    const options = {
      headers: {
        Authorization: `Bearer ${check}`,
      },
      method: 'GET',
    }

    const Response = await fetch(Url, options)
    if (Response.ok === true) {
      const data = await Response.json()

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

  GETT = event => {
    this.setState({getdata: event.target.value})
  }

  Icon = () => {
    const {getdata, failUrl} = this.state
    this.setState(
      {Url: `https://apis.ccbp.in/videos/all?search=${getdata}`},
      this.Fetch,
    )
  }

  close = () => {
    this.setState({tog: true})
  }

  success = () => (
    <CartContext.Consumer>
      {value => {
        const {isdark} = value

        const {List, getdata, tog} = this.state

        const bgcolor = isdark ? '#181818' : '#ffffff'
        const clr = isdark ? '#ffffff' : '#0f0f0f'

        return (
          <RightDiv bgcolor={bgcolor} color={clr} data-testid="home">
            {tog ? null : (
              <Primecard data-testid="banner">
                <Cardclose>
                  <IMAGE
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <Colorbtn
                    type="button"
                    data-testid="close"
                    onClick={this.close}
                  >
                    <IoMdClose />
                  </Colorbtn>
                </Cardclose>
                <Description>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </Description>
                <Primebutton>GET IT NOW</Primebutton>
              </Primecard>
            )}
            <Input as="button" data-testid="searchButton">
              <Inp
                type="search"
                placeholder="Search"
                value={getdata}
                onChange={this.GETT}
              />
              <HR />
              <Icon type="button" onClick={this.Icon}>
                <BsSearch />
              </Icon>
            </Input>

            <CardList>
              {List.length > 0
                ? List.map(each => <Cards each={each} key={each.id} />)
                : this.ListEmpty()}
            </CardList>
          </RightDiv>
        )
      }}
    </CartContext.Consumer>
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
            <Retry type="button" onClick={this.Fetch}>
              Retry
            </Retry>
          </D>
        )
      }}
    </CartContext.Consumer>
  )

  ListEmpty = () => (
    <D>
      <NoVs
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <h1>No Search results found</h1>
      <PP>Try different key words or remove search filter</PP>
      <Retry type="button" onClick={this.Fetch}>
        Retry
      </Retry>
    </D>
  )

  Result = () => {
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

  content = () => (
    <CartContext.Consumer>
      {value => {
        const {isdark} = value

        const {List, getdata, tog} = this.state

        const bgcolor = isdark ? '#0f0f0f' : '#ffffff'
        const clr = isdark ? '#ffffff' : '#0f0f0f'

        return (
          <Homebg bgcolor={bgcolor} color={clr}>
            <Navbar />
            <Bothdiv bgcolor={bgcolor} color={clr}>
              <CatAlign />
              {this.Result()}
            </Bothdiv>
          </Homebg>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <div>{this.content()}</div>
  }
}

export default Home
