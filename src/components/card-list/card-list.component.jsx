import React from "react"
import "./card-list.style.css"
import Card from "./card.component"

function CardList(props){
    const list=props.users.map(user=>{
        return <Card key={user.id} name={user.name} id={user.id} email={user.email}/>
    })

    return  (
        <div className="card_list">
        {
            list
        }
        </div>
    )
}
export default CardList