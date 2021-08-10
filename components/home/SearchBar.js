import React from "react";
import styles from "../../styles/SearchBar.module.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      matches: [],
    };
  }

  getMatches = () => {
    fetch("http://localhost:8000/books/search_book/" + this.state.search)
      .then((res) => res.json())
      .then((res) => this.setState({ matches: res.data.slice(0, 5) }));
  };

  goToRecommend = (book_id) => {
    console.log(book_id, this.props.include_saga);
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value }, () => {
      if (this.state.search.length > 1) {
        this.getMatches();
      } else {
        this.setState({ matches: [] });
      }
    });
  };

  render() {
    return (
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="I want a book similar to..."
          value={this.state.search}
          onChange={this.handleChange}
        />
        <div className={styles.matches}>
          {this.state.matches.map((book) => (
            <div
              onClick={(e) => {
                this.goToRecommend(book.book_id);
              }}
              className={styles.match}
              key={book.book_id}
            >
              <p className={styles.matchTitle}>{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
