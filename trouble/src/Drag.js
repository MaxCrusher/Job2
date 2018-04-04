import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { arrayMove } from 'react-sortable-hoc'
import { Link } from 'react-router-dom'
import SortableList from './Components/SortableList'
import * as dragAction from './Action/Drag'
import * as API from './Servises'
import store from './store'
import './App.css'

const cookie = require('./Components/FunctionCookie/FunctionCookie.js')

const drag = {
  mass: [],
  id: 1,
}

class Drag extends Component {
  constructor(props) {
    super(props)
    this.onSortEnd = this.onSortEnd.bind(this)
    this.ChangeId = this.ChangeId.bind(this)
  }
  componentWillMount() {
    if (cookie.getCookie('name') === 'user') {
      console.log('+')
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    drag.mass = arrayMove(this.props.mas, oldIndex, newIndex)
    store.dispatch(dragAction.setDragMas(drag.mass))
  };

  ChangeId(e) {
    store.dispatch(dragAction.setDragId(e.target.value))
  }

  Change() {
    drag.mass = []
    let i = 0
    while (i < this.props.id ** 2) {
      drag.mass.push(i)
      i++
    }
    drag.mass.sort(() => Math.random() - 0.5)
    store.dispatch(dragAction.setDragMas(drag.mass))
  }

  Exit() {
    API.Exit((data) => {
      document.cookie = 'name=' + data.name
      document.cookie = 'password=' + data.password
    })
  }
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
              value={this.props.id}
            />
            <button
              type="button"
              name="but"
              id="inputbut"
              onClick={() => { this.Change() }}
            >
              OK{console.log(this.props.id)}
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
          mas={this.props.mas}
          onSortEnd={this.onSortEnd}
          axis="xy"
          size={this.props.id}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mas: state.drag.mas,
    id: state.drag.id,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dragAction: bindActionCreators(dragAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drag)
