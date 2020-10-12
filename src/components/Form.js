import React from 'react'
import Input from "./Input"

export default function Form(props) {

    const {formTitle,buttonTitle,onChange,onClick} = props

    return (
    <div className="user-form">
        <form className="ui form">
            <h1 style={{textAlign:"center"}}>{formTitle}</h1>
            <Input label="First Name" type="text" name="userName" placeholder="First Name" onChange={onChange}/>
            <Input label="Last Name" type="text" name="userSurname" placeholder="Last Name" onChange={onChange}/>
            <Input label="E-mail" type="text" name="userEmail" placeholder="E-mail" onChange={onChange}/>
           
            <div className="buttons">
                <button className="ui button" type="submit" onClick={onClick}>{buttonTitle}</button>
            </div>
        </form>
    </div>
    )
}
