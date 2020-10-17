import React, { Component } from 'react'
import {getUsers,deleteUser} from '../api/UserService'

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
            users: [...this.state.users].filter(users => users.userId !== id)
        })
        )
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
                    
                    {this.state.users.map(users => 
                     <tr key={users.userId}>
                            <td style={{textAlign:"center"}}>{users.userName}</td>
                            <td style={{textAlign:"center"}}>{users.userSurname}</td>
                            <td style={{textAlign:"center"}}>{users.userEmail}</td>
                            <div className="buttons">
                                <button className="ui inverted blue button" onClick={() => this.updateUser(users.userId)}>Edit</button>
                                <button className="ui inverted red button" onClick={() => this.deleteUser(users.userId)}>Delete</button>
                            </div>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        )
    }
}
