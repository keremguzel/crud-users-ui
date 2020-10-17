import React from 'react'

export default function Input(props) {

    const {label,type,name,placeholder,value,onChange,className} = props
    return (
        <div className={className}>           
                    <label>{label}</label>
                    <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}
