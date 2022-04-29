import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NewsItem extends Component {
    render() {
        let {title,description,imageurl,newsurl,mode,author,date,source} = this.props
        // console.log(this.props.mode==="light")
        // console.log(mode)
        return (
            <>
            <div className="my-3">
                <div className="card" style={{width:"85%"}}>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source} </span>
                    <img src={imageurl} style={{height:"12rem",borderWidth:"2px",borderStyle:"solid",borderColor:mode==="dark"?"white":"black"}} className="card-img-top" alt="..." />
                    <div className="card-body" style={{backgroundColor: mode==="light"?"white":"black",borderWidth:"2px",borderStyle:"solid",borderColor:mode==="dark"?"white":"black"}}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} </p>
                        <Link to={`${newsurl}`} rel="noreferrer"  target="_blank" className="btn btn-primary">Read More</Link>
                        <p class="card-text" style={{marginTop:"0.5rem"}}><small class="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()} </small></p>
                    </div>
                </div>
                </div>
            </>
        )
    }
}
