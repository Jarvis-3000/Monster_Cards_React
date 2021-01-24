import React from 'react'
import "./searchBox.style.css"

function SearchBox({placeholder,handleChange}){
    return (
        <input className="searchBox" type="text" placeholder={placeholder}  onChange={handleChange}/>
    )
}

export default SearchBox