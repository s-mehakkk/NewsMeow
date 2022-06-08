import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class NewsComponent extends Component {

    static propTypes={
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    static defaultProps={
        pageNum : 5,
        category : ''
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            pageNum: 1

        }
    }

    updateNews = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=90bd313746614e5ab3e4e719901420cb&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.pageNum}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }
    
    handlePrevClick = async () => {

        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=90bd313746614e5ab3e4e719901420cb&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.pageNum - 1}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({
        //     articles: parseData.articles,
        //     pageNum: this.state.pageNum - 1,
        //     loading: false
        // });
        await this.setState({pageNum: this.state.pageNum - 1});
        this.updateNews();
    }

    handleNextClick =async() => {
        await this.setState({pageNum: this.state.pageNum + 1});
        this.updateNews();
    }
    
    render() {
        return (
            <>
            <div className="container my-4">
                <h2 className='text-center mb-4'>{`NewsMeow - Top ${this.props.category} Headlines`}</h2>
                {this.state.loading && <Spinner />}
                <div className="row" >
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description.split(0, 48) : ""} imageUrl={element.urlToImage} url={element.url} date={element.publishedAt} source={element.source.name} author={element.author? element.author:"Unknown"}/>
                        </div>
                    })
                    }
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <button type="button" disabled={this.state.pageNum <= 1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
                    <p className='mb-0'>Page {this.state.pageNum}</p>
                    <button type="button" disabled={this.state.pageNum + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
            </>
        )
    }
}
