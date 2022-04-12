import React from 'react'

export const ReviewCard = ({
    author,
    content,
    author_details
}) => {
  return (
<div className="card mb-3" style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img 
      src={`https://image.tmdb.org/t/p/w300${author_details.avatar_path}`} 
      className="img-fluid rounded-start" 
      alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{author}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}
