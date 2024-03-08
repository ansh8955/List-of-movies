import React from 'react';
import './Landingpage.css';
import data from '../data';
import Card from '../components/Card';


function Landingpage(){
  return (
    <>
    {data.movieData.map((element, index) => {
        return (
          <Card
            imgSrc={element.img_url} 
            runtime={element.runtime}
            movieName={element.name}
            director={element.director}
            gener={element.genre}
            synopsis={element.synopsis}
            year={element.year}
            key={index}
          />
        );
      })}
    </>
  )
}

export default Landingpage;