import React from 'react';
import './style.scss';
import cinemas from '../Data';
import Cinema from '../Cinema';

const filterCinemas = function(searchTerm) {
  return cinema => cinema.name.toLowerCase().includes(searchTerm.toLowerCase());
}

class Cinemas extends React.Component {
  render() {
    const {searchTerm} = this.props;
    return (
      <div className="Cinemas">
        {cinemas.filter(filterCinemas(searchTerm))
          .map(item => <Cinema key={item.id} name={item.name}/>)
        }
      </div>
    );
  }
}

export default Cinemas;
