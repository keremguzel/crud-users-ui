import React from 'react'

export default function Input(props) {

    const {label,type,name,placeholder,value,onChange} = props
    return (
        <div className="field">
                    <label>{label}</label>
                    <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}
