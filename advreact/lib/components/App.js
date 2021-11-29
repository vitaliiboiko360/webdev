import React from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';
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
      <StoreContext.Provider value={this.props.store}>  
        <ArticleList
          articles={this.state.articles}
          store={this.props.store}
        />
      </StoreContext.Provider>  
    );
  }
}

export default App;
