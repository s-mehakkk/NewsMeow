import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsComponent extends Component {

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    static defaultProps = {
        pageNum: 5,
        category: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            pageNum: 1,
            totalResults: 0
        }
    }

    updateNews = async () => {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.pageNum}`;
        this.setState({ loading: true })
        this.props.setProgress(30);
        let data = await fetch(url);
        let parseData = await data.json();
        this.props.setProgress(70);
        await this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });
        this.props.setProgress(100);

    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async()=>{
        // this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.pageNum + 1}`;
        // this.props.setProgress(30);
        let data = await fetch(url)
        let parseData = await data.json();
        // this.props.setProgress(70);
        this.setState({
             articles : this.state.articles.concat(parseData.articles),
            //articles : parseData.articles,
            totalResults : parseData.totalResults,
            pageNum: this.state.pageNum + 1
        })
        // this.props.setProgress(100);

    }

    render() {
        return (
            <>
                <div className="container my-4 mt-5">
                    {console.log(this.state.pageNum)}
                    <h2 className='text-center mb-3'>{`NewsMeow - Top ${this.props.category} Headlines`}</h2>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner/>}
                    >
                        <div className="row" >
                            {this.state.articles.map((element) => {
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
}
