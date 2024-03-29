// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//     static defaultProps = {
//         country: 'in',
//         pageSize: 8,
//         category: 'general',
//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }
//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             loading: true,
//             pageNum: 1,
//             totalResults: 0
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
//     }

//     async updateNews() {
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27d30c75a2ca42f3a20964c3b8348172&page=${this.state.pageNum}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true });
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false, 
//         })

//     }
//     async componentDidMount() {
//         this.updateNews();
//     }

//     handlePrevClick = async () => {
//         this.setState({ page: this.state.pageNum - 1 });
//         this.updateNews();
//     }

//     handleNextClick = async () => {
//         this.setState({ page: this.state.pageNum + 1 });
//         this.updateNews()
//     }

//     fetchMoreData = async () => {  
//         await this.setState({page: this.state.pageNum + 1})
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27d30c75a2ca42f3a20964c3b8348172&page=${this.state.pageNum}&pageSize=${this.props.pageSize}`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         this.setState({
//              articles: this.state.articles.concat(parsedData.articles),
//             // articles: parsedData.articles,
//             totalResults: parsedData.totalResults
//         })
//       };

//     render() {
//         return (
//             <>
//                 <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
//                 {this.state.loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Spinner/>}
//                 > 
//                     <div className="container my-3">
                         
//                     <div className="row">
//                         {this.state.articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                     </div> 
//                 </InfiniteScroll>

//             </>
//         )
//     }
// }

// export default News

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalized(this.props.category)}-NewsMonkey`;
  }
  async updateNews() {
    this.setState({page : this.state.page + 1})
    // console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27d30c75a2ca42f3a20964c3b8348172&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    // console.log(this.state.page);

  }
  async componentDidMount() {

    this.updateNews();
  }

  fetchMoreData = async () => {
    // console.log(this.state.page);
    this.setState({page : this.state.page + 1})
    // console.log(this.state.page);

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27d30c75a2ca42f3a20964c3b8348172&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: true });
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
    // console.log(this.state.articles);
    // console.log(this.state.page);

  };



//   handlePrevClick = async () => {
//     this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   };

//   handleNextClick = async () => {
//     this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   };

  render() {
    return (
      <div className="container my-3">

        <h1 className="text-center my-3" style={{marginTop:'70px'}}>NewsMonkey - Top Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
        >

          <div className="row my-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
        </div>
      </div>
    );
  }
}

export default News;