import React from "react"


function ActivityCard({name, date, location, post}){

    return (
        <div className ="card">
            <div className = "card-body">
                <h2>{name}</h2>
                <p>{date}</p>
                <p>{location}</p>
                <p>{post}</p>
            </div>
            <button className ="clicked">View this Activity</button>

        </div>
    )

}

export default ActivityCard;