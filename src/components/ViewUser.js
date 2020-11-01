import React, { Component } from 'react'
import {getUserById} from "../api/UserService"

export default class ViewUser extends Component {

    state = {
        id: this.props.match.params.id,
        userName:null,
        userSurname:null,
        userEmail:null,
        userGender:null,
        pending: true
    }

    componentDidMount(){
        getUserById(this.state.id).then(response => {
            let user = response.data;
            this.setState({
                userName: user.userName,
                userSurname: user.userSurname,
                userEmail: user.userEmail,
                userGender: user.userGender,
                pending:false
            })

        }

    )
}
    

    render() {
        //const randomNum = Math.floor(Math.random()*5) + 1;

        return (
            <div className={this.state.pending && "ui loading form"}>
                <div className="ui link cards" style={{display:"flex",justifyContent:"center"}}>
                    <div className="card">
                        <div className="image">
                        <img src={this.state.userGender === "male" ? "https://semantic-ui.com/images/avatar2/large/matthew.png" : "https://semantic-ui.com/images/avatar2/large/molly.png"}/>
                        </div>
                        <div className="content">
                        <div className="header">{this.state.userName} {this.state.userSurname}</div>
                        <div className="meta">
                            <a></a>
                        </div>
                        <div className="description">
                            {this.state.userEmail}
                        </div>
                        </div>
                        <div className="extra content">
                        <span className="right floated">
                            Joined in 2020
                        </span>
                        <span>
                            <i className="fas fa-tasks" style={{paddingRight:"5px"}}/>  
                            {Math.floor(Math.random()*5)+1 + " Tasks"}   
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

