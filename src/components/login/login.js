import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  Loginbg,
  Logincard,
  Inputdiv,
  Input,
  Check,
  LoginButton,
  Div,
  IMG,
  Para,
} from './loginpg'

class Login extends Component {
  state = {
    username: '',
    password: '',
    toggle: false,
    error: '',
    err: false,
  }

  username = event => {
    this.setState({username: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  check = () => {
    this.setState(prev => ({toggle: !prev.toggle}))
  }

  Succuss = Token => {
    const {history} = this.props

    Cookies.set('jwt_token', Token, {expires: 30})

    history.replace('/')
  }

  Failure = error => {
    this.setState({error, err: true})
  }

  FetchDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const Url = 'https://apis.ccbp.in/login'
    const Userdetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(Userdetails),
    }
    const getfetch = await fetch(Url, options)
    const data = await getfetch.json()
    if (getfetch.ok === true) {
      this.Succuss(data.jwt_token)
    } else {
      this.Failure(data.error_msg)
    }
  }

  render() {
    const {username, password, toggle, error, err} = this.state

    const text = toggle ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <Loginbg>
        <Logincard onSubmit={this.FetchDetails}>
          <IMG
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Div>
            <label htmlFor="username">USERNAME</label>
            <Inputdiv>
              <Input
                id="username"
                value={username}
                onChange={this.username}
                type="text"
                placeholder="Username"
              />
            </Inputdiv>
          </Div>
          <Div>
            <label htmlFor="password">PASSWORD</label>
            <Inputdiv>
              <Input
                id="password"
                value={password}
                onChange={this.password}
                type={text}
                placeholder="Username"
              />
            </Inputdiv>
          </Div>
          <Check>
            <input type="checkbox" id="show" onClick={this.check} />
            <label htmlFor="show">Show Password</label>
          </Check>
          <LoginButton type="submit" onClick={this.FetchDetails}>
            Login
          </LoginButton>
          {err && <Para>*{error}</Para>}
        </Logincard>
      </Loginbg>
    )
  }
}

export default Login
