import React from "react";
import ActivitiesPage from "./ActivitiesPage"

function Home(){


    return (
        <div>
            <h1 className="display-4">Welcome to the Activities App!</h1>
            <p className="lead">Use your online life to live life offline.</p>
            <ActivitiesPage />
        </div>
    )
}

export default Home;