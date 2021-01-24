import React from "react"
import "./card-list.style.css"

function Card(props){
    return (
        <div className="card">
            <img alt="robo" src={`https://robohash.org/${props.id}?set=set2`}/>
            <h1>{props.name}</h1>
            <h3>{props.email}</h3>
        </div>
    )
}

export default Card