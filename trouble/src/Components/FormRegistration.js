import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Hash from 'js-hash-code'
import '../Css/Form.css'

let firsrtPassword
let secondPassword
export default class FormRegistrations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      validition: false,
      check: false,
    }
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
      this.setState({
        validition: true,
      })
    } else {
      this.setState({
        validition: false,
      })
    }
  }
  Registatioins() {
    const user = {
      login: document.getElementById('login').value,
      password: secondPassword,
    }
    if (this.state.validition === true) {
      fetch('/registration', {
        method: 'POST',
        body: JSON.stringify({ user }),
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        res.json().then((data) => {
          if (data.registration === true) {
            this.setState({
              check: true,
            })
          }
        })
      })
    }
  }
  render() {
    let link = null
    if (this.state.check === true) {
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
              onChange={() => this.CheckPassword()}
            />
          </p>
          <p className="Login">
            <input
              type="password"
              size="30"
              placeholder="repeat password"
              id="secondPassword"
              name="secondPassword"
              onChange={() => this.CheckPassword()}
              style={
                this.state.validition
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
