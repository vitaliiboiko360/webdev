import React from 'react';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import StoreContext from './StoreContext';

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

  render() {
    return (
      <div>
        <StoreContext.Provider value={this.props.store}>
          <SearchBar /> 
          <ArticleList
            articles={this.state.articles}
          />
        </StoreContext.Provider>
      </div>
    );
  }
}

export default App;
