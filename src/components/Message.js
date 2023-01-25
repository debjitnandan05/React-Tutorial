import React, { Component } from "react";

class Message extends Component {

    // step 1
    constructor(){
        super() // we extracted reacts component class and a 
                //call has to be made to the base class constructor
        this.state={
            message: 'Welcome Visitor'
        }
    }

    // step 4
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing!'
        })
    }

    render(){
        // step 2
        return (
        <div>
        <h1> {this.state.message} </h1>

        {/* step 3 */}
        <button onClick={()=> this.changeMessage()}>Subscribe</button>

        </div>
        )
    }
}

export default Message