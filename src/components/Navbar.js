import React from "react"
import {Link} from "react-router-dom"


function Navbar () {
    return (
        <div className = "navbarcontainer">
            <nav className = "Navbar">
                <CustomLink className = "nv1" to = "/">Home</CustomLink>
                <CustomLink className = "nv1" to = "/Events">Events</CustomLink>
                <CustomLink className = "nv1" to = "/more-resources">More Resources</CustomLink>
            </nav>
        </div>
        
    )
}

export default Navbar

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

