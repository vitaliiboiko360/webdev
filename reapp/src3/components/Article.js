import React from 'react';

const styles = {
    article: {
    paddingBottom: 5,
    marginBottom: 5,
    }
}

const Article = (props) => {
    const {article, author} = props;
    return (
        <div>
            <div style={styles.article} >{article.title}</div>
            <div>{article.date}</div>
            <div>
                <a href={author.website}>
                    {author.firstName} {author.secondName}
                </a>
            </div>
            <div>{article.body}</div>
        </div>
    );
};

export default Article;