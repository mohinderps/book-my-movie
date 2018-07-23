import React from 'react';
import './style.scss';

class BookingForm extends React.Component {
  render() {
    const {seats} = this.props;
    return (
      <div className="BookingForm">
        <h2>Select category</h2>
      </div>
    );
  }
}

export default BookingForm;
