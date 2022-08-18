import React, { Component } from 'react'

import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      someState: ''
    }
  }

  handleSubmit = async () =>{
    //await stops your js function until the code/process is done, the process is our API call
    //.then() anything before .then() is still gonna run regardless
    //you wanna avoid .then chaining when dealing with complex code
    //you can use .then if you want, but async/await will be less code
    const API = 'https://www.boredapi.com/api/activity/'//this is my API

    const res = await axios.get(API) //response, wait for res to get finished processing

    console.log(res.data)//data is our special keyword in this function
  }

  render() {
    return (
      <div>
        <h1>Let's request some data</h1>
        <button onClick={this.handleSubmit}>Click me</button>
      </div>
    )
  }
}

