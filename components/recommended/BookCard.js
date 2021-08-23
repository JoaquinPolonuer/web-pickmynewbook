import React from "react";
import styles from "../../styles/BookCard.module.css";

export default class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const book = this.props.book;
    return (
      <div className={styles.bookCard}>
        <div className={styles.bookImageDiv}>
          <img className={styles.bookImage} src={book.image_url} />
        </div>
        <div className={styles.bookInfo}>
          <h3 className={styles.bookTitle}>{book.title}</h3>
          <p className={styles.bookAuthor}>By {book.authors}</p>
          <p className={styles.bookDescription}>{book.description}..</p>
          <p className={styles.readMore}> Read More</p>
        </div>
      </div>
    );
  }
}
