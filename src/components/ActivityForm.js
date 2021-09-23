import React, {useState} from "react";


function ActivityForm({activities}){

    const [newActivity, setNewActivity] = useState({
        name:"",
        date: "",
        location: "",
        post: ""
    })
        
      
        function handleChange(event) {

          setNewActivity({
            ...newActivity,
            [event.target.name]: event.target.value,
          });
        }

    function handleSubmit(event) {
        event.preventDefault();

     fetch("http://localhost:3000/activities", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newActivity),
        })
            .then((r) => r.json())
            .then((activity) => {
            setNewActivity([...activities, activity]);
            }) ;

       
      }
    return(
        <div className = "form container">
            <form onSubmit={handleSubmit} className ="add-activity">
                <h3>Add a new Activity</h3>
                <input type ="text" 
                    name = "name" 
                    onChange = {handleChange} 
                    value ={newActivity.name} 
                    placeholder="Name of new activity"/>
                    <br /> 
                <input type ="text" 
                    name = "date" 
                    onChange = {handleChange} 
                    value ={newActivity.date} 
                    placeholder="Date activity takes place"/>
                    <br /> 
                <input type ="text" 
                    name = "location" 
                    onChange = {handleChange} 
                    value = {newActivity.location} 
                    placeholder ="Where will activity take place"></input>
                    <br /> 
                <input type ="text" 
                    name = "post" 
                    onChange = {handleChange } 
                    value = {newActivity.post} 
                    placeholder = "Post short message about activity."></input>
                    <br /> 
                <input type ="submit" 
                    name ="submit" 
                    value="Submit New Activity" 
                    className="submit" />
            </form>
        </div>

    )
}

export default ActivityForm;