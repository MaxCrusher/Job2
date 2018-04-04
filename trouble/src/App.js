import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import FormCheckIn from './Components/Formcheckin'
import FormRegistration from './Components/FormRegistration'
import Drag from './Drag'
import * as singAction from './Action/SingIn'
import * as API from './Servises'
import './App.css'

const cookie = require('./Components/FunctionCookie/FunctionCookie.js')

class App extends Component {
  
  componentWillMount() {
    if (!cookie.getCookie('name')) {
      API.InitialCookie((data) => {
        cookie.setCookie('name', data.name)
        cookie.setCookie('password', data.password)
      })
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <FormCheckIn />}
          />
          <Route path="/registration" render={() => <FormRegistration />} />
          <Route
            path="/game"
            render={() => (this.props.game ? <Drag /> : <Redirect to="/" />)}
          />
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    game: state.sing.val,
  }
}
export default connect(mapStateToProps)(App)
