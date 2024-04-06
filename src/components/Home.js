import React from "react"
import TypewriterEffect from "./TypewriterEffect";
import {Link} from "react-router-dom"
import Events from "./Events"
function Home() {



    return (
        <div className = "aboutMeContainer">
            <div className = "introduction-text">
                <TypewriterEffect text="&#x200B;AYJ Physics Club" speed ={100} delay = {1000}/>
                <h2 className = "bottom-text-title" >Learn about Astronomy and Physics</h2>
            </div>

            <CustomLink className = "eventsButton" to = "/events">Learn about our Events!</CustomLink>
            <Events />

            
            
        </div>
    )
}


export default Home;


function CustomLink ({to,children, ...props})
{
    const path = window.location.pathname

    return (
        <h3 className = {path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </h3> 
    )
}
