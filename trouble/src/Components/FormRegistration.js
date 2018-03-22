import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import '../Css/Form.css';
import Hash from 'js-hash-code';

let firsrtPassword;
let secondPassword;
class FormRegistrations extends Component{

    constructor(props){
        super(props)
        this.state={
            validition:false
        }
        this.CheckPassword = this.CheckPassword.bind(this);
        this.Registatioins = this.Registatioins.bind(this);
    }

    CheckPassword(e){
        if(e.target.name==="firsrtPassword"){
            firsrtPassword= Hash(e.target.value);
        }
        if(e.target.name==="secondPassword"){
            secondPassword=Hash(e.target.value);
        }
        if(firsrtPassword===secondPassword)
        {
            this.setState({
                validition:true
            });
            return {value: Hash(secondPassword)};
            
        }
    }
    Registatioins(e){
        var data = new FormData();
        var user = {
            login:document.getElementById('login').value,
            password:secondPassword
        }
        data.append("json", JSON.stringify(user));
        //var login = document.getElementById('login').value;
        if(this.state.validition===true){ 
          
            fetch("/registation",{
                method:'POST',
                body: JSON.stringify({login:user.login, password:user.password}),
                headers: {'content-type': 'application/json'}
            })
            
        }
        console.log(user.login +" " +user.password);
    }

    render(){
        return(
            <div>
            <form className = 'Form' name = "Registr" id = 'Form'>
                <p className = 'Login'>
                    <input type= "text" size = "30" placeholder = "login" id = 'login' name = "login"/>
                </p>
                <p className = 'Login'>
                    <input type= "password" size = "30" placeholder = "password" id = "firsrtPassword" name = "firsrtPassword" onChange= {this.CheckPassword.bind(this)}/>
                </p>
                <p className = 'Login'>
                    <input type= "password" size = "30" placeholder = "repeat password" id = "secondPassword" name = "secondPassword" onChange= {this.CheckPassword.bind(this)}
                            style={this.state.validition?{backgroundColor:'green'}:{backgroundColor:'red'}}/>
                </p>
            </form>
            <div className = 'button'>
                    <button onClick={this.Registatioins.bind(this)}> OK</button>
                </div>
            </div>
        );
    }
}
export default FormRegistrations