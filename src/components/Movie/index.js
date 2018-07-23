import React from 'react';
import './style.scss';

class Movie extends React.Component {
  render() {
    const {name} = this.props;
    return (
      <div className="Movie">
        {name}
      </div>
    )
  }
}

export default Movie;
