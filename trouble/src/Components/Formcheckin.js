import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import Hash from 'js-hash-code'
import * as singAction from '../Action/SingIn'
import store from '../store'
import * as API from '../Servises'
import '../Css/Form.css'

const sing = {
  val: false,
  message: '',
}

class FormCheckIn extends Component {
  constructor(props) {
    super(props)
    this.singIn = this.singIn.bind(this)
  }
  singIn() {
    const user = {
      login: document.getElementById('login').value,
      password: Hash(document.getElementById('password').value),
    }
    API.SingIn(user, (data) => {
      if (data.name === 'error') {
        document.cookie = 'name=' + data.name
        store.dispatch(singAction.setSingValFalse(sing))
      } else {
        document.cookie = 'name=' + data.name
        document.cookie = 'password=' + data.password
        store.dispatch(singAction.setSingValTrue(sing))
      }
    })
  }
  render() {
    let singIn = null
    if (this.props.game === true) {
      singIn = (
        <Link to="/game">
          <button >Играаать</button>
        </Link>
      )
    }
    return (
      <div>
        <form className="Form" name="CheckIn">
          <p className="Login">
            <label htmlFor="Login">{this.props.message}
              <input
                type="text"
                size="30"
                placeholder="login"
                name="login"
                id="login"
              />
            </label>
          </p>
          <p className="Login">
            <input
              type="password"
              size="30"
              placeholder="password"
              name="password"
              id="password"
            />
          </p>
          <p className="Login">
            <Link to="/registration">
              <button>Registration</button>
            </Link>
          </p>
        </form>
        <button onClick={() => this.singIn()}>Sing In</button>
        {singIn}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    game: state.sing.val,
    message: state.sing.message,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    singAction: bindActionCreators(singAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCheckIn)

