import React, { Component } from 'react'
import { arrayMove } from 'react-sortable-hoc'
import { Link } from 'react-router-dom'
import SortableList from './Components/SortableList'
import './App.css'

const cookie = require('./Components/FunctionCookie/FunctionCookie.js')

let mass = []

class Drag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mas: [],
      id: 1,
    }
    this.onSortEnd = this.onSortEnd.bind(this)
    this.ChangeId = this.ChangeId.bind(this)
  }
  componentWillMount() {
    if (cookie.getCookie('name') === 'user') {
      console.log('+')
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      mas: arrayMove(this.state.mas, oldIndex, newIndex),
    })
  };

  ChangeId(e) {
    this.setState({
      id: e.target.value,
    })
  }

  Change() {
    mass = []
    let i = 0
    while (i < this.state.id ** 2) {
      mass.push(i)
      i++
    }
    mass.sort(() => Math.random() - 0.5)
    this.setState({
      mas: mass,
    })
  }

  Exit() {
    fetch('/exit').then(res => {
      res.json().then((data) => {
        document.cookie = 'name=' + data.name
        document.cookie = 'password=' + data.password
      })
    })
  }
  //                        <div>{this.Cool()}</div>
  render() {
    return (
      <div>
        <div>
          <p>
            <input
              type="text"
              name="text"
              className="inputtext"
              onChange={this.ChangeId}
              value={this.state.id}
            />
            <button
              type="button"
              name="but"
              id="inputbut"
              onClick={() => { this.Change() }}
            >
              OK
            </button>
          </p>
          <p>
            <label htmlFor="button">{cookie.getCookie('name')}
              <Link to="/">
                <button onClick={() => this.Exit()}>Exit</button>
              </Link>
            </label>
          </p>
        </div>
        <SortableList
          mas={this.state.mas}
          onSortEnd={this.onSortEnd}
          axis="xy"
          size={this.state.id}
        />
      </div>
    )
  }
}
export default Drag
