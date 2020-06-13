import React,{ Component } from "react";
import '../Home/my.css'

class Navbar extends Component{
    render(){
        return(
            <div >
                <nav class="navbar navbar-dark bg-dark">
                    <h3 style={{color:"white"}} id="title">Movies-On-Demand</h3>
                </nav>
            </div>
        )
    }
}

export default Navbar


