import React, { Component } from 'react';
import {arrayMove } from 'react-sortable-hoc';
import SortableList from './Components/SortableList';
import './App.css';
let mass = [];
let i=0;
class App extends Component {

  static onEnter(nextState, replace){
    const local = window.localStorage.getItem('car')
    console.log(local);
    if(local!=="ford")
    {
      replace('/');
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      mas:[],
      id:1,
      check:false
    }
    this.onSortEnd = this.onSortEnd.bind(this);
    this.ChangeId = this.ChangeId.bind(this);
  }
  ChangeId(e){
    this.setState({
      id: e.target.value
    })
  }

  Change()
  {
    mass=[];
    var i = 0;
    while(i<Math.pow(this.state.id,2)){
      mass.push(i);
      i= i+1;
    }
    mass.sort(()=>Math.random() - 0.5);
    this.setState({
      mas:mass,
      check:false
    })
  }

  onSortEnd =({oldIndex, newIndex})=>{
    this.setState({
      mas: arrayMove(this.state.mas, oldIndex, newIndex)
    });
  }

  Cool(){
    this.state.mas.map((value, index)=>{
      if(value===index){
        i++;
      }
      else i=0;
      if(i ===Math.pow(this.state.id,2)&&i!==0){
        i=0;
        this.setState({
          check:true
        });
         alert("дааааааааааааааааааа");//setTimeout(()=>alert("дааааааааааааааааааа"),300)
      }
    })
  }
  
  render() {
      return (
        <div>
          <div>
            <p>
              <input type = "text" name = "text" className="inputtext" onChange={this.ChangeId.bind(this)} value= {this.state.id} />
              <button type = "button" name = "but" id = "inputbut" onClick={this.Change.bind(this) }>OK</button>
            </p>
          </div>
          <SortableList mas={this.state.mas}
                        onSortEnd={this.onSortEnd.bind(this)}
                        axis='xy'
                        size = {this.state.id} />
                        <div>{this.Cool()}</div>
        </div>
      );
    }
}
export default App;