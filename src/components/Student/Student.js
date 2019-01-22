import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: null
    }
  }

  componentDidMount () {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {
      this.setState({
        studentInfo: res.data
      })
    })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {

    console.log(this.props)

    let displayInformation = this.state.studentInfo ?
    <div className="box">
      <button onClick={() => this.goBack()}>Return to Class</button>
      <h1>{this.state.studentInfo.first_name + ' ' + this.state.studentInfo.last_name}</h1>
      <h3>{this.state.studentInfo.grade}</h3>
      <h3>{this.state.studentInfo.email}</h3>
    </div>
    : 'Please wait!'

    return (
      <div className="box">
        {displayInformation}
      </div>
    )
  }
}
