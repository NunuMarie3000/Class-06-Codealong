import React, { Component } from 'react'

import axios from 'axios'

// const center = {
//   'text-align': 'center'
// }

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      location: ''
      // activity: '',
      // type: '',
      // participants: '',
      // link: ''
    }
  }

  handleSubmit = async() =>{
    //code for random activity api
    // const API = 'http://www.boredapi.com/api/activity/';
    // const res = await axios.get(API)
    // this.setState({activity: res.data.activity, type: res.data.type, participants: res.data.participants, link: res.data.link})
    // axios.get(API).then((res)=>{
    //   console.log(res.data)
    // }).catch((err)=>{
    //   console.log(err)
    // })
    // console.log(res.data);
    const APImemphis = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION}&q=memphis&format=json`
    const res = await axios.get(APImemphis);
    this.setState({location: res.data})
    // console.log(res.data)
  }

  render() {
    return (
      <div>
        {/* <h1 style={center}>Let's do something fun today!</h1>
        <p style={center}>Click the button below to get a random activity</p>
        <hr/>
        {this.state.activity !== '' && <h2>Activity: {this.state.activity}</h2>}
        {this.state.type !== '' && <h3>Type: {this.state.type}</h3>}
        {this.state.participants !== '' && <h3>Participants: {this.state.participants}</h3>}
        {this.state.link !== '' && <h3>Link: {this.state.link} </h3>}
        <button onClick={this.handleSubmit}>Click me</button> */}
        <h1>Let's location???</h1>
        <p>Click the button to see places called Memphis!</p><hr/>
        <button onClick={this.handleSubmit}>Click me</button>
        <ul>
        {this.state.location !== '' && this.state.location.map(obj => <li key={obj.place_id}>{obj.display_name}</li>)}
        </ul>
      </div>
    )
  }
}

