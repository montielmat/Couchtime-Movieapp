import React from "react";

import { useNavigate,Link} from "react-router-dom";

export const MovieCard = ({
  id,
title,
  release_date,
  overview,
  vote_average,
  original_language,
  poster_path,
  genre_ids
}) => {

const navigate = useNavigate();

const handleMoreInfo = ()=>{
navigate("/:movieId",{replace:true})
}

  return (
    <div className="col">
    <div className="card border-0 h-100 mx-2 animate__animated animate__fadeIn">   
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted">{release_date}</h6>
        <small className="mt-2">genre id:{genre_ids}</small>
        {/* <p className="card-text">{overview}</p> */}
        {/* <div className="d-flex g-2 flex-column">
        <h6 className="text-success">{vote_average}</h6>
        </div> */}
      </div>
      <div className="card-footer">
      {
        vote_average > 6 ?
        <h6 className="text-success text-center">{vote_average}</h6>
        :
        <h6 className="text-warning text-center">{vote_average}</h6>
      }
      </div>
      <Link to={`/more-info/${id}`} className="btn btn-danger">
More Info
      </Link>
    </div>
    </div>
  );
};

// MovieCard.PropTypes={
//   id:PropTypes.number,
//   original_title:PropTypes.string,
//   original_language:PropTypes.string,
//   poster_path:PropTypes.string
// }