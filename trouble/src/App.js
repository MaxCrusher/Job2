import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormCheckIn from "./Components/Formcheckin";
import Drag from './Drag';
import FormRegistration from "./Components/FormRegistration";


let game= null;
class App extends Component {

    constructor(props) {
      super(props)
      this.state = {

      }
    }
    componentWillMount(){
      var cookie = 'car = ord';
      //document.cookie = cookie;
      window.localStorage.setItem('car', 'frd');
      console.log(document.cookie);
    }
    

    render() {

        return (
          <Router>
            <div>
                <Route exact path = "/" component = {FormCheckIn}/>
                <Route path = "/registration" component = {FormRegistration}/>
                <Route path = "/game" component = {Drag} onEnter={Drag.onEnter}/>
            </div>
          </Router>
        );
      }
}
export default App;