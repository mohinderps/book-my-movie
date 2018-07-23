import React from 'react';
import './style.scss';
import data from '../Data';

class Confirmation extends React.Component {

  cinemaName() {
    const {match} = this.props;
    const cinemaId = match.params.cinemaId;
    return data.find(cinema => cinema.id == cinemaId).name;
  }

  movieName() {
    const {match} = this.props;
    const cinemaId = match.params.cinemaId;
    const movieId = match.params.movieId;
    return data.find(cinema => cinema.id == cinemaId)
      .movies.find(movie => movie.id == movieId).name;
  }

  categoryName() {
    const {match} = this.props;
    return match.params.categoryId;
  }

  render() {
    return (
      <div className="Confirmation text-center">
        {`Your ticket has been confirmed
          for movie ${this.movieName()}
          at cinema ${this.cinemaName()}
          in category ${this.categoryName()}.`}
        <p className="primary-color">Thank You</p>
      </div>
    );
  }
}

export default Confirmation;
