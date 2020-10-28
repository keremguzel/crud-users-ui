import React from 'react'
import {Link} from 'react-router-dom'


export default function(props) {


    return (
       
        <div className="navbar">
            <div>
            <Link to="/"><p>USER MANAGEMENT</p></Link>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/add-user">Add User<i className="fas fa-user-plus" style={{marginLeft:"5px"}}/></Link>            
            </div>
            
        </div>
      

    )
}

