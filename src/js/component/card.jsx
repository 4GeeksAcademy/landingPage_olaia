import React from "react";


const Card = ({ imageSrc, title, text }) => {
  return (
      <div className="card mb-5 col-md-3">
          <div className= "imagen" >
          <img src={imageSrc} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
              <h5 className="card-title textColor">{title}</h5>
              <p className="card-text">{text}</p>
              <div className="button">
              <a href="#" className="btn btn-warning">Go somewhere</a>
              </div>
          </div>
      </div>
  );
};

export default Card