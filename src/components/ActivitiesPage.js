import React, {useState, useEffect} from "react"
import ActivityCard from "./ActivityCard"


function ActivitiesPage(){

    const [activities, setActivities] = useState([])
    
    useEffect(() =>{
        fetch('http://localhost:3000/activities')
        .then((res) => res.json())
        .then(setActivities)

    }, [])

    const activityCards = activities.map((activity) => {
        return <ActivityCard key = {activity.id} 
                   activities = {activities}
                    />
    }) 
    return(

        <div>
            <header>Activities Board</header>
            {activities && activityCards}
        </div>
    )
}

export default ActivitiesPage;