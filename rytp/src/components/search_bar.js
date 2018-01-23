import React, {Component} from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);
    //term can be any name
    //only inside constructor do we use syntax like this;
    //usually we use setState
    this.state = { term: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
