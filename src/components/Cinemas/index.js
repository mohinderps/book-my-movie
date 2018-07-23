import React from 'react';
import './style.scss';
import Cinema from '../Cinema';

const filterCinemas = function(searchTerm) {
  return cinema => cinema.name.toLowerCase().includes(searchTerm.toLowerCase());
}

class Cinemas extends React.Component {
  render() {
    const {searchTerm, cinemasList, handleSearchTermChange} = this.props;
    return (
      <div className="Cinemas">
        {cinemasList.filter(filterCinemas(searchTerm))
          .map(item => <Cinema key={item.id}
            id={item.id}
            name={item.name}
            movies={item.movies}
            fromGradient={item.fromGradient}
            toGradient={item.toGradient}/>)
        }
      </div>
    );
  }

  componentWillUnmount() {
    const {handleSearchTermChange} = this.props;
    handleSearchTermChange('');
  }
}

export default Cinemas;
