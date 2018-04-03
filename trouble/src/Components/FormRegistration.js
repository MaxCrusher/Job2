import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Hash from 'js-hash-code'
import '../Css/Form.css'
import * as regAction from '../Action/Registration'
import store from '../store'

let firsrtPassword
let secondPassword
const reg = {
  validation: false,
  check: false,
}
class FormRegistrations extends Component {
  constructor(props) {
    super(props)
    /*this.state = {
      validition: false, // валидация для отправки формы
      check: false, // для рендера кнопки "назад"
    }*/
    this.CheckPassword = this.CheckPassword.bind(this)
    this.Registatioins = this.Registatioins.bind(this)
  }

  CheckPassword(e) {
    if (e.target.name === 'firsrtPassword') {
      firsrtPassword = Hash(e.target.value)
    }
    if (e.target.name === 'secondPassword') {
      secondPassword = Hash(e.target.value)
    }
    if (firsrtPassword === secondPassword) {
      store.dispatch(regAction.setRegValTrue(reg))
    } else {
      store.dispatch(regAction.setRegValFalse(reg))
    }
  }

  Registatioins() {
    const user = {
      login: document.getElementById('login').value,
      password: secondPassword,
    }
    if (this.props.validation === true) {
      fetch('/registration', {
        method: 'POST',
        body: JSON.stringify({ user }),
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        res.json().then((data) => {
          if (data.registration === true) {
            store.dispatch(regAction.setRegCheckTrue(reg))
          }
        })
      })
    }
  }
  render() {
    let link = null
    if (this.props.check === true) {
      link = (
        <Link to="/">
          <button>Назад</button>
        </Link>
      )
    }
    return (
      <div>
        <form className="Form" name="Registr" id="Form">
          <p className="Login">
            <input
              type="text"
              size="30"
              placeholder="login"
              id="login"
              name="login"
            />
          </p>
          <p className="Login">
            <input
              type="password"
              size="30"
              placeholder="password"
              id="firsrtPassword"
              name="firsrtPassword"
              onChange={this.CheckPassword.bind(this)}
            />
          </p>
          <p className="Login">
            <input
              type="password"
              size="30"
              placeholder="repeat password"
              id="secondPassword"
              name="secondPassword"
              onChange={this.CheckPassword.bind(this)}
              style={
                this.props.validation
                  ? { backgroundColor: 'green' }
                  : { backgroundColor: 'red' }
              }
            />
          </p>
        </form>
        <div className="button">
          <button onClick={() => this.Registatioins()}> OK </button>
        </div>
        {link}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    validation: state.reg.validation,
    check: state.reg.check,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    regAction: bindActionCreators(regAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegistrations)
