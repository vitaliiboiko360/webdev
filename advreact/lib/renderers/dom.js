import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

initialData = {
  article: {},
  authors: {},
};

ReactDOM.render(
  <App initialData={initialData} />,
  document.getElementById('root')
);
