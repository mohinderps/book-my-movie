import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import ModalLauncher from '../ModalLauncher';
import BookingForm from '../BookingForm';
import * as posters from '../Data/posters';

class Movie extends React.Component {
  render() {
    const {id, name, seats, poster, match} = this.props;
    return (
      <div className="Movie">
        <div className="poster">
          <img src={posters[poster]}/>
        </div>
        <div className="details">
          <div className="text-center">{name}</div>
          <div>
            <ModalLauncher launcherTitle="Book Tickets"
              launcherClass="primary-button">
              <BookingForm seats={seats} match={match} movieId={id}/>
            </ModalLauncher>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
