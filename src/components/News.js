import React, { Component } from 'react'
import NewsItem from './NewsItem';
export default class News extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            page:1,
            pageSize:9,
            totalResults:0
        }
    }
    async componentDidMount(){
      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=07f1bf7824c54672a817c92edc303775&page=1&pageSize=${this.state.pageSize}`
      let data = await fetch(url)
      let parseddata = await data.json()
      console.log(parseddata)
      this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults})
    }
    
    handleNextClick = async()=>{
      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=07f1bf7824c54672a817c92edc303775&page=${this.state.page+1}&pageSize=${this.state.pageSize}`
      let data = await fetch(url)
      let parseddata = await data.json()
      console.log(parseddata)
      console.log("hello")
      this.setState({
        page:this.state.page+1,
        articles: parseddata.articles
      })
      
    }
    handlePreviousClick = async () =>{
      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=07f1bf7824c54672a817c92edc303775&page=${this.state.page-1}&pageSize=${this.state.pageSize}`
      let data = await fetch(url)
      let parseddata = await data.json()
      console.log(parseddata)
      console.log("hello")
      this.setState({
        page:this.state.page-1,
        articles: parseddata.articles
      })
      }
    
  render() {
    return (
      <>
      <div className="container my-3" style={{marginLeft:"10rem"}}>
        <h2 style={{marginTop:"5rem"}}>News Tiger - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title} description={element.description} imageurl={element.urlToImage?element.urlToImage:"imageNotFound.jpg"} newsurl={element.url}/>
          </div>
          })}
        </div>
      </div>
        <div className='d-flex justify-content-between' style={{margin:"3rem 3rem"}}>
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous </button>
        <button type="button" disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.state.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        </>

    )
  }
}
