import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent =(props)=>{

const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(false);
const [pageNum, setPageNum] = useState(1);
const [totalResults, setTotalResults] = useState(0)


    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?${props.country}&apiKey=${props.apiKey}&category=${props.category}&pageSize=${props.pageSize}&page=${pageNum}&q=${props.query}`;
        setLoading(true)
        props.setProgress(30);
        let data = await fetch(url);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false)
        props.setProgress(100);

    }
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    useEffect(() => {
      updateNews();
      document.title = `${props.category} - NewsMeow`;
    //   document.body.style.backgroundColor = "red";
      // eslint-disable-next-line
    }, [])
    

    const fetchMoreData = async()=>{
        // props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?${props.country}&apiKey=${props.apiKey}&category=${props.category}&pageSize=${props.pageSize}&page=${pageNum + 1}&q=${props.query}`;
        // props.setProgress(30);
        let data = await fetch(url)
        let parseData = await data.json();
        // props.setProgress(70);
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setPageNum(pageNum + 1)
        // props.setProgress(100);

    }

        return (
            <>
                <div className="container my-4 mt-5">
                    <h2 className='text-center mb-5 mt-4 addedFont'>{`Top ${props.category} Headlines`}</h2>
                    {loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner/>}
                    >
                        <div className="row" >
                            {articles.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description.split(0, 48) : ""} imageUrl={element.urlToImage} url={element.url} date={element.publishedAt} source={element.source.name} author={element.author ? element.author : "Unknown"} />
                                </div>
                            })
                            }
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
}

NewsComponent.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    query: PropTypes.string
}

NewsComponent.defaultProps = {
    pageNum: 5,
    category: '',
    query: '',
    country: 'in'
}

export default NewsComponent;
