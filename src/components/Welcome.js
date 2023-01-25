import React, { Component } from "react";

// 
// class Welcome extends Component {
//     render(){
//         return <h1>Welcome to my page {this.props.name}</h1>
//     }
// }


//<-------- Destructuring Props ------> 

// Method 1
class Welcome extends Component {
   render(){
        const {fname,name} = this.props
        return (
        <h1>
            Welcome to my page {fname} a.k.a {name}
        </h1>
            )
    }
}

export default Welcome