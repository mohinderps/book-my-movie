import React from 'react';
import './style.scss';
import Movie from '../Movie';

const filterMovies = function(searchTerm) {
  return movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase());
}

class Movies extends React.Component {
  getMovies() {
    const cinemaId = Number.parseInt(this.props.match.params.cinemaId);
    const {cinemaList} = this.props;
    return  cinemaList.find(item => item.id === cinemaId).movies;
  }

  render() {
    const movies = this.getMovies();
    const {searchTerm} = this.props;
    return (
      <div className="Movies">
        {movies.filter(filterMovies(searchTerm))
          .map(item => <Movie key={item.id} name={item.name} />)}
      </div>
    );
  }
}

export default Movies;
