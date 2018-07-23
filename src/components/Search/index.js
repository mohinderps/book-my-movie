import React from 'react';
import './style.scss';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    const {handleSearchTermChange} = this.props;
    const {value} = event.target;
    handleSearchTermChange(value);
  }


  render() {
    const {searchTerm} = this.props;
    return (
      <div className="Search">
        <div className="input-holder">
          <input value={searchTerm} onChange={this.onSearchChange} placeholder="Search"/>
        </div>
      </div>
    );
  }
};

export default Search;
