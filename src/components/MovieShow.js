import React from 'react';
 
const MovieShow = ({match, movies}) => {
 
  return (
    <div>
        {console.log(match.params)}
      <h3>{ movies[match.params.movieID].title }</h3>
    </div>
  );
}
 
export default MovieShow;