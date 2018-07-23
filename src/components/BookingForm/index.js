import React from 'react';
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
    const {seats} = this.props;
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
            <button type="button" className="primary-button no-padding">Book</button>
          </li>
        </ul>
        <ul className="inline-list category-list text-center">
          <li>Platinum</li>
          <li>{this.price('platinum')}</li>
          <li>{this.availability('platinum')}</li>
          <li>
            <button type="button" className="primary-button no-padding">Book</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default BookingForm;
