import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import StoreContext from './StoreContext';


const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.8em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};
const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const Article = (props) => {
  const { article, store } = props;
  console.log(store);
  const storeContext = useContext(StoreContext);
  const author = storeContext.lookupAuthor(article.authorId);
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>
        {dateDisplay(article.date)}
      </div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
};

const ArticleContainer = (props) => {
  const storeContext = useContext(StoreContext);
  return <Article {...props} store={storeContext} />;
};

ArticleContainer.contextTypes = {
  store: PropTypes.object,
};

export default Article;
