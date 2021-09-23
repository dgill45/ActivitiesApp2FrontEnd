import React from "react"
import {Link} from 'react-router-dom'


function ActivityCard({name, date, location, post, id, handleDeleteActivity}){

    return (
        <div className ='card-container'>
            <div className ="card">
                <div className = "card-body">
                    <h4>{name}</h4>
                    <hr className ='line'></hr>
                    <p>{date}</p>
                    <p>{location}</p>
                </div>
                    <Link to ={`/activities/${id}`}> 
                        <button className ="clicked">View this Activity</button>
                    </Link>
                    <Link to = {`/activities/${id}`}>
                        <button className = "clicked" onClick = {handleDeleteActivity}> Delete this Activity!</button>
                    </Link> 
            </div>
            <p>{post}</p>
        </div>
    )

}

export default ActivityCard;