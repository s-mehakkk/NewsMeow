import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
     let {title, discription, imageUrl, url, date, author, source} = this.props;
    return (
      <div className="card ">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info text-dark" style={{left:'90%', zIndex:'1' }}>{source}</span>
      <img src={imageUrl? imageUrl: "https://i-invdn-com.investing.com/news/indicatornews_4_800x533_L_1413112066.jpg"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">By {author} on {new Date(date).toGMTString()}</p>
        <p className="card-text">{discription}..</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
      </div>
    </div>
    )
  }
}


