import React from 'react';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import StoreContext from './StoreContext';
import Timestamp from './Timestamp';

import pickBy from 'lodash.pickby';

class App extends React.Component {
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
  appState = () => {
    const {articles , searchTerm} = this.props.store.getState();
    return { articles, searchTerm };
  }
  state = this.appState();
  onStoreChange = () => {
    this.setState(this.appState);
  }
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.articles !== this.state.articles || nextState.searchTerm !== this.state.searchTerm
    );
  }

  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      const searchRE = new RegExp(searchTerm, 'i');
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return (
      <div>
        <StoreContext.Provider value={this.props.store}>
            <Timestamp />
            <SearchBar />
            <ArticleList
              articles={articles}
            />  
        </StoreContext.Provider>
      </div>
    );
  }
}

export default App;
