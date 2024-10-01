import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount() {
         console.log(" componentDidMount");
        document.title = `Clicked ${this.state.count} times`
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("component Did Update");
        document.title = `Clicked ${this.state.count} times`
    }
    render() {
    return (
      <div>
        <button onClick={() => this.setState({count: this.state.count +1}) }>Click Me</button>
        Clicked {this.state.count} times</div>
    )
  }
}

export default ClassCounterOne