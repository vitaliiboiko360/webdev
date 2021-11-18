import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from 'components/App';

const serverRender = () => {
  const resp = await axios.get('/data');
  const api = new DataApi(resp.data);

  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };

  return ReactDOMServer.renderToString(
    <App initialData={initialData} />
  );
};

export default serverRender;
