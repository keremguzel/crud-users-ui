import React, { Component } from 'react'
import {getUserById} from "../api/UserService"

export default class ViewUser extends Component {

    state = {
        id: this.props.match.params.id,
        userName:null,
        userSurname:null,
        userEmail:null,
        userGender:null
    }

    componentDidMount(){
        getUserById(this.state.id).then(response => {
            let user = response.data;
            this.setState({
                userName: user.userName,
                userSurname: user.userSurname,
                userEmail: user.userEmail,
                userGender: user.userGender
            })

        }

    )
}


    render() {
        const randomNum = Math.floor(Math.random()*5) + 1;

        return (
            <div class="ui link cards" style={{display:"flex",justifyContent:"center"}}>
                <div class="card">
                    <div class="image">
                    <img src={this.state.userGender === "male" ? "https://semantic-ui.com/images/avatar2/large/matthew.png" : "https://semantic-ui.com/images/avatar2/large/molly.png"}/>
                    </div>
                    <div class="content">
                    <div class="header">{this.state.userName} {this.state.userSurname}</div>
                    <div class="meta">
                        <a></a>
                    </div>
                    <div class="description">
                        {this.state.userEmail}
                    </div>
                    </div>
                    <div class="extra content">
                    <span class="right floated">
                        Joined in 2020
                    </span>
                    <span>
                        <i class="fas fa-tasks" style={{paddingRight:"5px"}}/>  
                        {randomNum === 1 ? randomNum+" Task" : randomNum+" Tasks"}  
                    </span>
                    </div>
                </div>
            </div>
        )
    }
}
