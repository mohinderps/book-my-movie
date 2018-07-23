import React, {Component} from 'react';
import './style.scss';
import Search from '../Search';
import Cinemas from '../Cinemas';
import Movies from '../Movies';
import Confirmation from '../Confirmation';
import data from '../Data';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(searchTerm) {
    this.setState({
      searchTerm
    });
  }

  render() {
    const {searchTerm} = this.state;
    return (
      <div className="App">
        <Search searchTerm={searchTerm} handleSearchTermChange={this.handleSearchTermChange}/>

        <Route exact path="/" render={() => <Cinemas
          searchTerm={searchTerm}
          cinemasList={data}
          handleSearchTermChange={this.handleSearchTermChange} /> } />

        <Route exact path="/cinema/:cinemaId" render={({match}) => <Movies
          searchTerm={searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
          cinemaList={data}
          match={match}/> } />

        <Route exact path="/cinema/:cinemaId/movie/:movieId/category/:categoryId/confirmed"
          render={({match}) => <Confirmation match={match}/> } />
      </div>
    );
  }
}

export default App;
