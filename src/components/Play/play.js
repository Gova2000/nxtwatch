import {Component} from 'react'

import ReactPlayer from 'react-player'
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Navbar from '../Nav/nav'

import CatAlign from '../Navalign/align'

import CartContext from '../../NXT.JS/Nxt'

import {
  PlayBG,
  Div,
  Divcol,
  Heading,
  ProImg,
  P,
  Play,
  D,
  NoVs,
  PP,
  Retry,
} from './playpg'

const Constlist = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class PlayVideo extends Component {
  state = {
    video: [],
    liked: false,
    dislike: false,
    save: false,
    status: Constlist.initial,
  }

  componentDidMount() {
    this.VideoFetch()
  }

  like = () => {
    this.setState(prev => ({liked: !prev.liked}))
  }

  dislike = () => {
    this.setState(prev => ({dislike: !prev.dislike}))
  }

  save = () => {
    this.setState(prev => ({save: !prev.save}))
  }

  VideoFetch = async () => {
    this.setState({status: Constlist.progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const Url = `https://apis.ccbp.in/videos/${id}`

    const check = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${check}`,
      },
      method: 'GET',
    }

    const geturl = await fetch(Url, options)
    if (geturl.ok === true) {
      const data = await geturl.json()
      console.log(data)
      const update = {
        profileImg: data.video_details.channel.profile_image_url,
        name: data.video_details.channel.name,
        SubScribers: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        id: data.video_details.id,
        date: data.video_details.published_at,
        thumbnail: data.video_details.thumbnail_url,
        title: data.video_details.title,
        URL: data.video_details.video_url,
        Views: data.video_details.view_count,
      }
      this.setState({video: update, status: Constlist.success})
    } else {
      this.setState({status: Constlist.failure})
    }
  }

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
            <Retry type="button" onClick={this.VideoFetch}>
              Retry
            </Retry>
          </D>
        )
      }}
    </CartContext.Consumer>
  )

  Play = () => (
    <CartContext.Consumer>
      {value => {
        const {isdark, AddData} = value

        const {video, liked, dislike, save, status} = this.state
        const {
          id,
          URL,
          Views,
          title,
          profileImg,
          date,
          description,
          SubScribers,
          name,
        } = video

        const Vcs = () => {
          AddData({...video})
        }

        const bgcolor = isdark ? '#0f0f0f' : '#ffffff'

        const color = isdark ? '#ffffff' : '#0f0f0f'

        const likeicon = liked ? <AiFillLike /> : <AiOutlineLike />
        const dislikeicon = dislike ? <AiFillDislike /> : <AiOutlineDislike />

        const colored = liked ? '#2563eb' : '#64748b'
        const colored1 = dislike ? '#2563eb' : '#64748b'
        const colored2 = save ? '#2563eb' : '#64748b'

        const stext = save ? 'Saved' : 'Save'

        return (
          <PlayBG
            bgcolor={bgcolor}
            color={color}
            data-testid="videoItemDetails"
          >
            <Navbar />
            <Divcol>
              <CatAlign />
              {status === 'SUCCESS' ? (
                <Play>
                  <ReactPlayer url={URL} controls width="95%" height="500px" />
                  <p>{title}</p>
                  <Div colo="space-between">
                    <P colo="#94a3b8">
                      {Views} Views . {date}
                    </P>
                    <Div>
                      <Div as="button" onClick={this.like} color={colored}>
                        {likeicon}
                        <P>Like</P>
                      </Div>
                      <Div as="button" onClick={this.dislike} color={colored1}>
                        {dislikeicon}
                        <P>Dislike</P>
                      </Div>
                      <Div as="button" onClick={this.save} color={colored2}>
                        <RiPlayListAddFill />
                        <P onClick={Vcs}>{stext}</P>
                      </Div>
                    </Div>
                  </Div>
                  <hr />
                  <Div>
                    <ProImg src={profileImg} alt="channel logo" />
                    <Div>
                      <div>
                        <p>{name}</p>
                        <P colo="#94a3b8">{SubScribers} Subscribers</P>
                        <p>{description}</p>
                      </div>
                    </Div>
                  </Div>
                </Play>
              ) : (
                this.failure()
              )}
            </Divcol>
          </PlayBG>
        )
      }}
    </CartContext.Consumer>
  )

  loading = () => (
    <D data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </D>
  )

  render() {
    return <>{this.Play()}</>
  }
}

export default PlayVideo
