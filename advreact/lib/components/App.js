import React from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';
import StateApi from 'state-api';

import { createContext} from 'react';

const storeContext = createContext({});

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
      <storeContext.Provider value={this.props.state}>  
        <ArticleList
          articles={this.state.articles}
          store={this.props.store}
        />
      </storeContext.Provider>  
    );
  }
}

export default App;
