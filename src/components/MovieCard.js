import React from "react";

import {Link } from "react-router-dom";

export const MovieCard = ({
  id,
  title,
  release_date,
  vote_average,
  poster_path,
}) => {

  return (
    <div className="col">
      <div className="card border-0 h-100 mx-2 animate__animated animate__fadeIn">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title ||"We're sorry, the title is unavailable 😥"}</h5>
          <h6 className="card-subtitle text-muted">{release_date.substring(0,4)}</h6>
        </div>
        <div className="card-footer">
          {vote_average > 6 ? (
            <h6 className="text-success text-center">
            {vote_average}</h6>
          ) : (
            <h6 className="text-warning text-center">{vote_average}</h6>
          )}
          {/* <svg class="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
								<circle class="circle-chart__background" stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
								<circle id="r-b" class="circle-chart__circle" stroke="#dc3545" stroke-width="2" stroke-dasharray={`${vote_average}*1000/100`} stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
								<g class="circle-chart__info">
									<text class="circle-chart__percent" x="16.91549431" y="15.5" alignment-baseline="central" id="r-a" text-anchor="middle" font-size="10" font-weight="700">{vote_average}</text>
								</g>
							</svg> */}
        </div>
        <Link to={`/more-info/${id}`} className="btn btn-danger">
        <small className="mx-2">More Info</small>
        <i className="fa-solid fa-circle-info"></i>
        </Link>
      </div>
    </div>
  );
};
