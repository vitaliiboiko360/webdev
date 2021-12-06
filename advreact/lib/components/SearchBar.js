import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  }
  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300)
  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('Updating SearchBar');
  }
  render() {
    return (
      <input
        type="search"
        placeholder="search for"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;