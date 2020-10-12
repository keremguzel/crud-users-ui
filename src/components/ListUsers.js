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

    editUser = (id) => {
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
                            
                             {this.state.users.map(u =>
                                <tr key={u.userId}>
                                    <td style={{textAlign:"center"}}>{u.userName}</td>
                                    <td style={{textAlign:"center"}}>{u.userSurname}</td>
                                    <td style={{textAlign:"center"}}>{u.userEmail}</td>
                                    <div className="buttons">
                                        <button class="ui inverted blue button" onClick={() => this.editUser(u.userId)}>Edit</button>
                                        <button class="ui inverted red button" onClick={() => this.deleteUser(u.userId)}>Delete</button>
                                    </div>
                                </tr>
                            )}

                    </tbody>
                </table>

            </div>
        )
    }
}
