import React from "react";

const NewsItem = (props) =>{


      let  {title, description, imgUrl, newsUrl,author, publishedAt} = props;
    return (
        <div className="card">
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...<span className="badge mx-1 bg-dark ">New</span></h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">~By {author}<span> {new Date(publishedAt).toDateString()} </span></small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark" >Read More &rarr; </a>
            </div>
        </div>
    );

}

export default NewsItem;
