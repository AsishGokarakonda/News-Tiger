import React, { Component } from 'react'
import NewsItem from './NewsItem';
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading:false
    }
    // console.log(this.state.loading)

  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07f1bf7824c54672a817c92edc303775&page=1&pageSize=${this.props.pageSize}`
    this.setState({
      loading:true
    })
    let data = await fetch(url)
    let parseddata = await data.json()
    console.log(parseddata)
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults,loading:false })
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07f1bf7824c54672a817c92edc303775&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({
      loading:true
    })
    console.log(this.state.loading)
    let data = await fetch(url)
    let parseddata = await data.json()
    console.log(parseddata)
    console.log("hello")
    this.setState({
      page: this.state.page + 1,
      articles: parseddata.articles,
      loading:false
    })

  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07f1bf7824c54672a817c92edc303775&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({
      loading:true
    })
    let data = await fetch(url)
    let parseddata = await data.json()
    console.log(parseddata)
    console.log("hello")
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading:false
    })
  }

  render() {
    return (
      <>
        {this.state.loading && <div className='text-center' style={{ marginTop: "8rem" }}>
          <img src="loading.gif" style={{ height:"11rem",width:"15rem" }} alt="" />
        </div>}
          <h2 style={{ marginTop: "5rem",marginBottom:"1rem",textAlign:"center" }}>News Tiger - Top Headlines</h2>
        <div className="container my-3" style={{ marginLeft: "10rem" }}>
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem mode={this.props.mode} title={element.title} description={element.description} imageurl={element.urlToImage ? element.urlToImage : "imageNotFound.jpg"} newsurl={element.url} author = {element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          <div className='d-flex justify-content-between' style={{ margin: "3rem 0rem" }}>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous </button>
          <button type="button" style={{ marginRight: "4rem" }} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        </div>

      </>
    )
  }
}