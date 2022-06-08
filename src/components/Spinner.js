import React, { Component } from 'react'
import spinner from '../Flowing.gif'

export default class Spinner extends Component {
  render() {
    return (
        <div className='text-center'>
      <img src={spinner} alt="spinner"/>
      </div>
    )
  }
}
