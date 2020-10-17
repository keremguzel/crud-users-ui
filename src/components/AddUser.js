import React, { Component } from 'react'
import {addUser} from '../api/UserService'
import Input from "./Input"

export default class AddUser extends Component {

    state = {
        userName:null,
        userSurname:null,
        userEmail:null,
        errors:{}
    }

    onChange = (e) => {

        const {value,name} = e.target
        const errors = {...this.state.errors}
        
        if(name === "userName"){
            errors.username = undefined
        }
        if(name === "userSurname"){
            errors.usersurname = undefined
        }
        if(name === "userEmail"){
            errors.useremail = undefined
        }

        this.setState({
            [name]:value,
            errors : errors
        })

    }
    
    createUser = async (e) => {
        e.preventDefault(); 
        const user = {userName: this.state.userName, userSurname: this.state.userSurname, userEmail: this.state.userEmail}

            try{
                const response = await addUser(user)
                this.props.history.push("/")
            }catch(error){
                this.setState({
                    errors: error.response.data.validationErrors
                })
               
            }
            
            
    }

    render() {
        return (
            <div className="user-form">
                <form className="ui form error">
                    <h1 style={{textAlign:"center"}}>Add User</h1>
                    <Input className= {this.state.errors.username ? "field error" : "field"} label="First Name" type="text" name="userName" placeholder="First Name" onChange={this.onChange}/>
                    <div className="error-message" style={{fontSize:"10px",textAlign:"left",color:"red",marginTop:"-10px"}}>
                        {this.state.errors.username}
                    </div> 
                    <Input className={this.state.errors.usersurname ? "field error" : "field"} label="Last Name" type="text" name="userSurname" placeholder="Last Name" onChange={this.onChange}/>
                    <div className="error-message" style={{fontSize:"10px",textAlign:"left",color:"red",marginTop:"-10px"}}>
                        {this.state.errors.usersurname}
                    </div> 
                    <Input className={this.state.errors.useremail ? "field error" : "field"} label="E-mail" type="text" name="userEmail" placeholder="E-mail" onChange={this.onChange}/>
                    <div className="error-message" style={{fontSize:"10px",textAlign:"left",color:"red",marginTop:"-10px"}}>
                        {this.state.errors.useremail}
                    </div> 

                    <div className="buttons">
                        <button className="ui button" type="submit" onClick={this.createUser}>Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}
