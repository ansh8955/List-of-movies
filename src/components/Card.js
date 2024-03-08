import "./Card.css";
import { FaMessage } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import React from "react";

function Card(props) {
  return (
    <div className="Container">
     
      <div className="MovieDetails">
      <div className="movieImage1">
        <img src={props.imgSrc} alt="" />
      </div>
       
       <div>
         <h2 className="MovieName">{props.movieName}</h2>
        <p>Year of Release:{props.year}</p>
        <p>Director: {props.director}</p>
        <p>Time: {props.runtime}</p>
        <p>Geners: {props.gener}</p>
        <p className="extraContent">Synopsis:{props.synopsis}</p>
        <div className="cardIcon">
          <FaShareAlt className="icon" />
          <FaHeart className="icon" />
          <FaMessage className="icon" />
        </div>
      </div>
      </div>
      <div className="movieImage">
        <img src={props.imgSrc} alt="" />
      </div>
    </div>
  );
}

export default Card;
