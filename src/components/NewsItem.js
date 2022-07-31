import React from 'react'

const NewsItem = (props) => {
  let { title, discription, imageUrl, url, date, author, source } = props;
  return (
    <div className="card rounded" style ={{backgroundColor: '#efdbdb'}}>
      {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info text-dark" style={{left:'90%', zIndex:'1' }}>{source}</span> */}
      <img src={imageUrl ? imageUrl : "https://i-invdn-com.investing.com/news/indicatornews_4_800x533_L_1413112066.jpg"} className="card-img-top" alt="..." />
      <div className="card-body">
        <p>{source}</p>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">By {author} on {new Date(date).toGMTString()}</p>
        <p className="card-text">{discription}..</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Read more</a>
      </div>
    </div>
  )
}

export default NewsItem;


