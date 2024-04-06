import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import {Route,Routes} from "react-router-dom"
import MoreResources from "./components/MoreResources"
import Error404 from "./components/Error404"
import Footer from "./components/Footer"
import Events from "./components/Events"


function App() {
  return (
    <div className = "appDiv">
          <Navbar />
          <Routes>
            <Route path ="/" element ={<Home />} />
            <Route path ="/Data" element ={<Events />} />
            <Route path ="/more-resources" element ={<MoreResources />} />
            <Route path ="*" element ={<Error404 />} />
            <Route path ="/Events" element = {<Events />} />
          </Routes>
          <Footer />
    </div>
  );
}

export default App;
