import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FormCheckIn from './Components/Formcheckin'
import FormRegistration from './Components/FormRegistration'
import Drag from './Drag'
import * as singAction from './Action/SingIn'
import './App.css'

const cookie = require('./Components/FunctionCookie/FunctionCookie.js')

class App extends Component {
  
  componentWillMount() {
    if (!cookie.getCookie('name')) {
      fetch('/a').then(res => {
        res.json().then((data) => {
          cookie.setCookie('name', data.name)
          cookie.setCookie('password', data.password)
        })
      })
    }
    console.log(singAction)
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <FormCheckIn />} // fun={() => this.validation()}
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
/*function mapDispatchToProps(dispatch) {
  return {
    singAction: bindActionCreators(singAction, dispatch),
  }
}
*/
export default connect(mapStateToProps)(App)
