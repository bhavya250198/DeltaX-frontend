import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles.css';
import axios from 'axios';
 export default class Test extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            uname: '',
            uemail: '',
    
            message:'',
            todo_completed: false
        }
    }

    onChangeUserName(e) {
        this.setState({
            uname: e.target.value
        });
    }

    onChangeUserEmail(e) {
        this.setState({
            uemail: e.target.value
        });
    }



    
    onSubmit(e) {
        e.preventDefault();
        if(!this.state.uname)
        {
            this.setState({message:"names cannot be null"});
        }
        else if(!this.state.uemail)
        {
            this.setState({message:"Email Address cannot be null"});
        }
        
        else
        { 
            console.log(`Form submitted:`);
        console.log(`User Name: ${this.state.uname}`);
        console.log(`User Email Id: ${this.state.uemail}`);
        
        const artist = {
            uname: this.state.uname,
            uemail: this.state.uemail,
            todo_completed: this.state.todo_completed
        };
        axios.post('http://localhost:4000/addusers', artist)
            .then(res => console.log(res.data));
        
        this.setState({
            uname: '',
            uemail: '',
            todo_completed: false
        })}
       
    }

    render() {
        return (
            <div style={{marginTop: "41px",marginLeft: "429px",
              marginRight: "513px"}}>
                <h2>Add a new User </h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.uname}
                                onChange={this.onChangeUserName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email Id: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.uemail}
                                onChange={this.onChangeUserEmail}
                                />
                    </div>
                   
                    
                        <div>
                            {
                                this.state.message
                            }
                        </div>

                    <div className="form-group">
                        <input type="submit" value="Done" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}