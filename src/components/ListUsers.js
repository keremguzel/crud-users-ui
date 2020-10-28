import React, { Component } from 'react'
import {getUsers,deleteUser} from '../api/UserService'
import {Link} from "react-router-dom"

export default class ListUsers extends Component {

    state = {
        users: []
    }


    componentDidMount(){
        getUsers().then(response => {
            this.setState({
                users: response.data
            })
        })
    }

    updateUser = (id) => {
        this.props.history.push(`/edit-user/${id}`)
    }

    deleteUser = (id) => {
       deleteUser(id).then(response =>
        this.setState({
            users: [...this.state.users].filter(user => user.userId !== id)
        })
        )
    }

    viewUser = (id) => {
        this.props.history.push(`/view-user/${id}`)
    }

    render() {
        return (
            <div>
                <table className="ui inverted blue table">
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Surname</th>
                    <th style={{textAlign:"center"}}>E-mail</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                    
                    {this.state.users.map(user => 
                     <tr key={user.userId}>
                            <td style={{textAlign:"center"}}><Link to={`/view-user/${user.userId}`} style={{color:"white"}} onClick={() => this.viewUser(user.userId)}>{user.userName}</Link></td>
                            <td style={{textAlign:"center"}}>{user.userSurname}</td>
                            <td style={{textAlign:"center"}}>{user.userEmail}</td>
                            <div className="buttons">
                                <button className="ui inverted blue button" onClick={() => this.updateUser(user.userId)}>Edit</button>
                                <button class="ui inverted olive button" onClick={() => this.viewUser(user.userId)}>View</button>
                                <button className="ui inverted red button" onClick={() => this.deleteUser(user.userId)}>Delete</button>
                            </div>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        )
    }
}
