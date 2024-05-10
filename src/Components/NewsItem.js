import React from "react";

const NewsItem=(props)=> {

    let { title, description, imageUrl, newsUrl, author, date} =props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={!imageUrl? "https://www.hindustantimes.com/ht-img/img/2024/04/19/550x309/India_Flag_1713518778477_1713518820010.jpeg" :imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">by {!author? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target= "_blank" rel="noreferrer" className="btn btn-primary btn-dark">
            Read More
            </a>
          </div>
        </div>
      </div>
    );
}
export default NewsItem
