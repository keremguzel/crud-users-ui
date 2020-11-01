import React, { Component } from 'react'
import Input from "./Input"
import {login} from "../api/UserService"
import {connect} from "react-redux"
import {loginSuccess} from "../redux/authActions"

class Login extends Component {

    state = {
        username:null,
        password:null,
        error: null
    }

    onChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name]:value,
            error:null
        })

    }

    credentials = {
        username:this.state.username,
        password:this.state.password
    }


    onClickLogin = async (e) => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.setState({
            error:null
        })
        try{
            await login(credentials)
            this.props.history.push("/")

            const authState = {
                username: this.state.username,
                password: this.state.password
            }

            this.props.onLoginSuccess(authState)
        }
        catch(error){
            this.setState({
                error: error.response.data.message
            })
        }
    }

    render() {

        const {username,password} = this.state
        const isDisabled = !username || !password

        return (
            <div className="user-form">
                 <form className="ui form error">
                    <h1 style={{textAlign:"center"}}>Login</h1>
                    <Input className= {"field"} label="Username" type="text" name="username" placeholder="Username" onChange={this.onChange}/>            
                    <Input className={"field"} label="Password" type="password" name="password" placeholder="Password" onChange={this.onChange}/>
                    
                    {this.state.error && 
                    <div className="ui error message" style={{textAlign:"center"}}>
                    <div className="header">{this.state.error}</div>
                        <p>Username or password is incorrect</p>
                    </div>}

                    <div className="buttons">
                        <button className="ui button" type="submit" disabled={isDisabled} onClick={this.onClickLogin}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (store) => {
//     return {
//         isLoggedIn:store.isLoggedIn,
//         username: store.username
//     }
// } 

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginSuccess: (authState) => {
            return dispatch(loginSuccess(authState))
        }
    }
}


export default connect(null, mapDispatchToProps)(Login)