import React, { Component } from 'react'
import Input from "./Input"
import {getUserById,updateUser} from "../api/UserService"

export default class UpdateUser extends Component {

    state = {
        id: this.props.match.params.id,
        userName: null,
        userSurname: null,
        userEmail: null
    }

    onChange = (e) => {
        const {value,name} = e.target

        this.setState({
            [name]:value
        })
    }

    componentDidMount(){
        getUserById(this.state.id).then(response => {
          let user = response.data
          this.setState({
              userName: user.userName,
              userSurname: user.userSurname,
              userEmail: user.userEmail
          })
          
        })
    }

    updateUser = (e) => {
        e.preventDefault(); 
        let user = {userName: this.state.userName, userSurname: this.state.userSurname, userEmail: this.state.userEmail}
       updateUser(user,this.state.id).then(response =>
            this.props.history.push("/")
        )
      
    }


    render() {
        return (
            <div className="user-form">
        <form className="ui form">
            <h1 style={{textAlign:"center"}}>Update User</h1>
            <Input className="field" label="First Name" type="text" value={this.state.userName} name="userName" placeholder="First Name" onChange={this.onChange}/>
            <Input className="field" label="Last Name" type="text" value={this.state.userSurname} name="userSurname" placeholder="Last Name" onChange={this.onChange}/>
            <Input className="field" label="E-mail" type="text" value={this.state.userEmail} name="userEmail" placeholder="E-mail" onChange={this.onChange}/>
           
            <div className="buttons">
                <button className="ui button" type="submit" onClick={this.updateUser}>Submit</button>
            </div>
        </form>
            </div>
            
        )
    }
}
