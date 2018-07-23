import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

class BookingForm extends React.Component {

  availability(category) {
    const {seats} = this.props;
    return seats.find(item => item.category.toLowerCase() === category.toLowerCase()).seats;
  }

  price(category) {
    const {seats} = this.props;
    return seats.find(item => item.category.toLowerCase() === category.toLowerCase()).price;
  }

  render() {
    const {seats, match, movieId} = this.props;
    return (
      <div className="BookingForm">
        <div className="text-center">Select Category</div>
        <ul className="inline-list category-list primary-color header text-center">
          <li>Category</li>
          <li>Price</li>
          <li>Availability</li>
          <li>Book now</li>
        </ul>
        <ul className="inline-list category-list text-center">
          <li>Gold</li>
          <li>{this.price('gold')}</li>
          <li>{this.availability('gold')}</li>
          <li>
            <Link to={`${match.url}/movie/${movieId}/category/Gold/confirmed`} ><button type="button" className="primary-button no-padding">Book</button></Link>
          </li>
        </ul>
        <ul className="inline-list category-list text-center">
          <li>Platinum</li>
          <li>{this.price('platinum')}</li>
          <li>{this.availability('platinum')}</li>
          <li>
            <Link to={`${match.url}/movie/${movieId}/category/Platinum/confirmed`}><button type="button" className="primary-button no-padding">Book</button></Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default BookingForm;
