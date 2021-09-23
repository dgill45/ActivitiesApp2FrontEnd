import React, {useState} from "react";

function Messages(){

    const [messages, setMessages] = useState([])

    fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(messages),
        })
            .then((r) => r.json())
            .then((message) => {
            setMessages([...messages, message]);
            }) ;

    return (
        <div className ='post-box'>
            <p className ='content'>
            {messages.content}
            </p>
            <span><strong>{messages.author}</strong></span>

        </div>
    )
}

export default Messages;