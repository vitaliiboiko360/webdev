import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: '',
  }
  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300)
  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if()
  //   return false;
  // }
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

export default storeProvider()(SearchBar);