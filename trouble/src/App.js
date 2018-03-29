import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import FormCheckIn from './Components/Formcheckin'
import FormRegistration from './Components/FormRegistration'
import Drag from './Drag'
import './App.css'

const cookie = require('./Components/FunctionCookie/FunctionCookie.js')

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: false,
    }
    this.validation = this.validation.bind(this)
  }
  componentWillMount() {
    if (!cookie.getCookie('name')) {
      fetch('/a').then(res => {
        res.json().then((data) => {
          cookie.setCookie('name', data.name)
          cookie.setCookie('password', data.password)
        })
      })
    }
  }
  validation() {
    this.setState({
      val: true,
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <FormCheckIn fun={() => this.validation()} />}
          />
          <Route path="/registration" render={() => <FormRegistration />} />
          <Route
            path="/game"
            render={() => (this.state.val ? <Drag /> : <Redirect to="/" />)}
          />
        </div>
      </Router>
    )
  }
}
