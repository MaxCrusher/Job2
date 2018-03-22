import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import '../Css/Form.css';
class FormCheckIn extends Component{

    constructor(props){
        super(props)
    }
    componentWillMount(){
       // fetch("/")
    }
    
    render(){
        return(
            <div>
            <form className = 'Form' method = "POST" action= "http://localhost:8080" name = "CheckIn">
                <p className = 'Login'>
                    <input type= "text" size = "30" placeholder = "login" name = "login"/>
                </p>
                <p className = 'Login'>
                    <input type= "password" size = "30" placeholder = "password" name = "password"/>
                </p>
                <p className = 'Login'>
                    <input type = "submit" />
                    <Link to = "/registration">
                        <button>Registration</button>
                    </Link>
                </p>
            </form>
            </div>
        );
    }
}
export default FormCheckIn