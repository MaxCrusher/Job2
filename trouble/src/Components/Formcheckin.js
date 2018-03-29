import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Hash from 'js-hash-code'
import '../Css/Form.css'

export default class FormCheckIn extends Component {
  constructor(props) {
    super(props)
    this.singIn = this.singIn.bind(this)
    this.state = {
      game: false,
      validation: '',
    }
  }
  singIn() {
    const user = {
      login: document.getElementById('login').value,
      password: Hash(document.getElementById('password').value),
    }
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {
      res.json().then(resCookie => {
        if (resCookie.name === 'error') {
          document.cookie = 'name=' + resCookie.name
          this.setState({
            validation: 'error',
          })
        } else {
          document.cookie = 'name=' + resCookie.name
          document.cookie = 'password=' + resCookie.password
          this.setState({
            game: true,
            validation: '',
          })
        }
      })
    })
  }

  render() {
    let singIn = null
    if (this.state.game === true) {
      singIn = (
        <Link to="/game">
          <button onClick={() => this.props.fun()}>Играаать</button>
        </Link>
      )
    }
    return (
      <div>
        <form className="Form" name="CheckIn">
          <p className="Login">
            <label htmlFor="Login">{this.state.validation}
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
