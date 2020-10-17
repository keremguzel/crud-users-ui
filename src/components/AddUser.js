import React, { Component,Fragment } from 'react'
import {addUser} from '../api/UserService'
import Form from "./Form"

export default class AddUser extends Component {

    state = {
        userName:null,
        userSurname:null,
        userEmail:null
    }

    onChange = (e) => {

        const {value,name} = e.target

        this.setState({
            [name]:value
        })
    }

    createUser = (e) => {
        e.preventDefault(); 
        let user = {userName: this.state.userName, userSurname: this.state.userSurname, userEmail: this.state.userEmail}
        console.log("user: " + JSON.stringify(user))

        addUser(user).then(response =>
            this.props.history.push("/")
            )
    }

    render() {
        return (
            <Fragment>
                <Form formTitle="Add User" buttonTitle="Submit" value="" onChange={this.onChange} onClick={this.createUser}/>
           </Fragment>
        )
    }
}
