import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import {logoutSuccess} from "../redux/authActions"

 class Navbar extends Component{

    // onClickLogout = () => {
    //     // const action = {
    //     //     type: "logout-success"
    //     // }
    //     // this.props.dispatch(action)     
        
    //     //this.props.dispatch(logoutSuccess())
    // }

   render(){

    //console.log(this.props)
    const {isLoggedIn,username,onLogoutSuccess} = this.props

    let link = (
            <div>
                <Link to="/">Home</Link>  
                <Link to="/login">Login<i className="fas fa-sign-in-alt" style={{marginLeft:"5px"}}/></Link>          
            </div>
    )

    if(isLoggedIn){
        link = (
            <div>
                <Link to="/">Welcome, {username}</Link>
                <Link to="/add-user">Add User<i className="fas fa-user-plus" style={{marginLeft:"5px"}}/></Link>    
                <Link to="/logout" onClick={onLogoutSuccess}>Logout<i className="fas fa-sign-out-alt" style={{marginLeft:"5px"}}/></Link>          
            </div>
                )
    }

    return (
       
        <div className="navbar">
            <div>
            <Link to="/"><p>USER MANAGEMENT</p></Link>
            </div>
                {link}
            </div>
      

    )
   }
}

const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn,
        username: store.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogoutSuccess: () => {
            return dispatch(logoutSuccess())
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
