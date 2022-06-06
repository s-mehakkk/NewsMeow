import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
     let {title, discription, imageUrl} = this.props;
    return (
      <div class="card" style={{width: "18rem"}}>
      <img src={imageUrl} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{discription}</p>
        <a href="/" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    )
  }
}


