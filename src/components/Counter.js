import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    increment(){

      this.setState({                            // this.setState(object,call back function)
        count : this.state.count+1
      } , ()=>{
        console.log('Callback Value', this.state.count)
      })

      console.log(this.state.count)
    }

    incrementFive(){
      this.setState( prevState => ({
        count : prevState.count+5
      }))
      console.log(this.state.count)
    }


    decrement(){
      this.setState({
          count: this.state.count-1
      })
  }


  render() {
    return (
      <div>
        
        <h1> Count - {this.state.count}</h1>
        <button onClick={() => this.decrement()}>-</button>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.incrementFive()}>+5</button>

      </div>
    )
  }
}

export default Counter
