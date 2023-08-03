import React from "react";
import User from "./User";


class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                avatar_url:"https://Dummyphoto",
                name:"Dummy",
                location:"Default location"
            }
        };
    }

async componentDidMount (){
    const data = await fetch("https://api.github.com/users/SagarBarate");
    const json = await data.json();
    this.setState({
        userInfo:json,
    })
    console.log(json);
}


    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
               
                <img src={avatar_url}></img>
                <h2>Name:{this.state.userInfo.name}</h2>
                <h2>Location :{location}</h2>
                <h2>Constact : 7045488409</h2>
            </div>
        );
        
    }
}

export default UserClass
