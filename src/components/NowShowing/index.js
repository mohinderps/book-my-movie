import React from 'react';
import './style.scss';

class NowShowing extends React.Component {

  moviesString() {
    const {movies} = this.props;
    return movies.reduce((res, val, index) => {
      res = res + val.name;
      if(index === movies.length - 2) {
        res += ' and '
      }
      else if(index === movies.length - 1) {
        res += '.'
      }
      else {
        res += ', '
      }

      return res;
    }, '');
  }

  render() {
    return (
      <p>NOW SHOWING: {this.moviesString()}</p>
    )
  }
}

export default NowShowing;
