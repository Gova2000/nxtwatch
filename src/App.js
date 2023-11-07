import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/login/login'

import Protected from './components/protected/potected'

import Home from './components/Home/home'

import Trend from './components/Trending/trending'

import Game from './components/Game/Game'

import Save from './components/Saved/save'

import PlayVideo from './components/Play/play'

import NotFound from './components/NotFound/Notfound'

import CartContext from './NXT.JS/Nxt'

import './App.css'

// Replace your code here
class App extends Component {
  state = {savedList: [], isdark: false, activetab: 'HOME'}

  updatetab = text => {
    this.setState({activetab: text})
  }

  dark = () => {
    this.setState(prev => ({isdark: !prev.isdark}))
  }

  AddItems = data => {
    const {savedList} = this.state

    const check = savedList.some(each => each.id === data.id)

    if (savedList.length === 0 || check === false) {
      this.setState(prev => ({savedList: [...prev.savedList, data]}))
    } else {
      const Dlt = savedList.filter(each => each.id !== data.id)
      this.setState(prev => ({savedList: Dlt}))
    }
  }

  render() {
    const {savedList, isdark, activetab} = this.state

    return (
      <CartContext.Provider
        value={{
          savedList,
          activetab,
          activetabitem: this.updatetab,
          isdark,
          AddData: this.AddItems,
          theam: this.dark,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Protected exact path="/" component={Home} />
          <Protected exact path="/trending" component={Trend} />
          <Protected exact path="/gaming" component={Game} />
          <Protected exact path="/saved-videos" component={Save} />
          <Protected exact path="/videos/:id" component={PlayVideo} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
