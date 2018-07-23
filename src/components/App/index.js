import React, {Component} from 'react';
import './style.scss';
import Search from '../Search';
import Cinemas from '../Cinemas';

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
        <Cinemas searchTerm={searchTerm} />
      </div>
    );
  }
}

export default App;
