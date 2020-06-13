import React, { Component } from 'react'
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login'; 
import axios from "axios";
import '../Home/my.css'
class Signup extends Component {

    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }

    // componentDidUpdate (){
    //     let UserData={
    //         UserName : this.props.name,
    //         UserEmail : this.props.email,
    //         UserId : this.props.userId,
             
    //     }
    // //     axios.post(`http://localhost:5000/login`, UserData)
    // //   .then(res => {
    // //     console.log(res);
    // //     console.log(res.data);
    // //   })
    // }
    
    responseFacebook = (res) =>{
        console.log(res);
        this.setState({
            email:res.email,
            
        })
        
    }
    componentClicked =() =>{
        console.log("clicked");
    }
    render() {
        console.log(this.props);
        let fbcontent; 
        if(this.props.isLoggedIn){
            fbcontent = (
                <div  id ="fb" style={{
                    width:'300px',
                    background:'#00000',
                    padding:'10px'
                }}>
                    {/* <img src={this.state.picture} alt={this.state.name}></img> */}
                    <h2>Welcome {this.props.name}</h2>
                    Email:{this.props.email}
                </div>
            );
        }else{
            fbcontent = (
                <FacebookLogin
                    appId="657545351742846"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={(res)=>{this.responseFacebook(res)}} />
            )
        }
        return (
            <div className="d-flex justify-content-center" >
                {fbcontent}
                {/* <h1>hello World</h1> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn : state.isLoggedIn,
        userId : state.userId,
        name : state.name,
        email:state.email
         
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        responseFacebook: dispatch
    }
  }


export default connect(mapStateToProps,mapDispatchToProps) (Signup);