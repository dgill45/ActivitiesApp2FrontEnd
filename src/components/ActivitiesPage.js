import React, {useState, useEffect} from "react"
import ActivityCard from "./ActivityCard"
import ActivityForm from './ActivityForm'



function ActivitiesPage(){

    const [activities, setActivities] = useState([])
    const [showForm, setShowForm] = useState(false)
    
    useEffect(() =>{
        fetch('http://localhost:3000/activities')
        .then((res) => res.json())
        .then(setActivities)
        
    }, [])

    const activityCards = activities.map((activity) => {
        return <ActivityCard key = {activity.id} 
                    name = {activity.name}
                    date = {activity.date}
                    location = {activity.location}
                    post = {activity.post}
                    /*handleDeleteBook={handleDeleteBook}
                    handleEditBook = {handleEditBook}*/
                    />
    }) 

    function handleClick() {
        setShowForm((showForm) => !showForm)
      }

      
    return(

        <div>
            <header>Activities Board</header>
            {activities && activityCards}
            {showForm ? <ActivityForm 
                activityCards = {activityCards}
                /> : null}
            <div className="buttonContainer">
                <button onClick={handleClick}>Add a new Activity</button>
            </div>
        </div>
    )
}

export default ActivitiesPage;