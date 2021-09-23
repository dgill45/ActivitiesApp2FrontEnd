import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
/*import Messages from './Messages';*/


function ActivityDetails({activities}){

    const [activity, setActivity] = useState([])
    const {id} = useParams()

    useEffect(() =>{
        fetch(`http://localhost:3000/activities/${id}`)
        .then((res) => res.json())
        .then(activity => setActivity(activity))

    }, [id])


    function handleEditActivity(id){
        fetch(`http://localhost:3000/activities/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                
              },
              body: JSON.stringify(activities),
            })
              .then((r) => r.json())
              .then((activities) => {
                const updatedActivityList =activities.filter((activity) =>{
                  return activity.id !==id      
                  })     
                  setActivity(updatedActivityList)
          })
        }

    function handleDeleteActivity(id) {
        fetch(`http://localhost:3000/activities/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
           const updatedActivityList =activities.filter((activity) =>{
             return activity.id !==id      
             })
             setActivity(updatedActivityList)
          });
      }

    return (


        <div>
            {activity && <div className = "card">
            <div className = "card-body">
                    <h3>{activity.name}</h3>
                     <p>{activity.date}</p>
                    <p>{activity.location}</p>
                    <p>{activity.post}</p>
                </div>
                {/*<Messages activity={activity}/>*/}
                <button className = 'clicked' onClick = {handleEditActivity}> Edit this Activity</button>
                <button className = 'clicked' onClick = {handleDeleteActivity}>Delete This Activity!</button>
            </div>}
        </div>
    )
}

export default ActivityDetails;