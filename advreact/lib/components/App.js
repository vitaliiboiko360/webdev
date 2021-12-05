import React from 'react';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import StoreContext from './StoreContext';

import pickBy from 'lodash.pickby';

class App extends React.Component {
  state = this.props.store.getState();
  // async componentDidMount() {
  //   const resp = await axios.get('/data');
  //   const api = new DataApi(resp.data);

  //   this.setState(() => ({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors(),
  //   }));
  // }
  // setSearchTerm = (searchTerm) => {
  //   this.setState({searchTerm});
  // }
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(onStoreChange);
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <div>
        <StoreContext.Provider value={this.props.store}>
            <SearchBar doSearch={this.props.store.setSearchTerm} />
            <ArticleList
              articles={articles}
            />  
        </StoreContext.Provider>
      </div>
    );
  }
}

export default App;
