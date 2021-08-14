import React from "react";
import Link from "next/link";
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
              className={styles.match}
              key={book.book_id}
              onClick={() => {
                window.location.href = `/recommend?book_id=${book.book_id}`;
              }}
            >
              <p className={styles.matchTitle}>{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
