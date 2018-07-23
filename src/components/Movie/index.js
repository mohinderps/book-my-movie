import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import ModalLauncher from '../ModalLauncher';
import BookingForm from '../BookingForm';

class Movie extends React.Component {
  render() {
    const {name, seats} = this.props;
    return (
      <div className="Movie">
        <div className="poster">
        </div>
        <div className="details">
          <div>{name}</div>
          <div>
            <ModalLauncher buttonTitle="BookTickets"
              buttonClass="book-button">
              <BookingForm seats={seats} />
            </ModalLauncher>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
