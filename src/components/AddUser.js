import React, { Component } from 'react'
import {addUser} from '../api/UserService'
import Input from "./Input"

export default class AddUser extends Component {

    state = {
        userName:null,
        userSurname:null,
        userEmail:null,
        userGender:null,
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
        if(name === "userGender"){
            errors.gender = undefined
        }

        this.setState({
            [name]:value,
            errors : errors,
        })

    }


    createUser = async (e) => {
        e.preventDefault(); 
        const user = {userName: this.state.userName, userSurname: this.state.userSurname, userEmail: this.state.userEmail, userGender: this.state.userGender}

            try{
                await addUser(user)
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
                    <Input className= {this.state.errors.username ? "field error" : "field"} errors = {this.state.errors.username} label="First Name" type="text" name="userName" placeholder="First Name" onChange={this.onChange}/>
                    <Input className={this.state.errors.usersurname ? "field error" : "field"} errors = {this.state.errors.usersurname} label="Last Name" type="text" name="userSurname" placeholder="Last Name" onChange={this.onChange}/>
                    <Input className={this.state.errors.useremail ? "field error" : "field"} errors = {this.state.errors.useremail} label="E-mail" type="text" name="userEmail" placeholder="E-mail" onChange={this.onChange}/>
                    <div className={this.state.errors.gender ? "six wide field field error" : "six wide field"}>
                        <label>Gender</label>
                        <select className="ui fluid search dropdown" onChange={this.onChange} name="userGender">
                            <option value=""></option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <div className="error-message" style={{fontSize:"10px",textAlign:"left",color:"red"}}>
                            {this.state.errors.gender && this.state.errors.gender}
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="ui button" type="submit" onClick={this.createUser}>Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}


