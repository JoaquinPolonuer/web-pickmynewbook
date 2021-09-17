import React from "react";
import Link from "next/link";
import styles from "../../styles/SearchBar.module.css";
import { API_URL } from "../../constants";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      matches: [],
      current_book_id: 1,
    };
  }

  getMatches = () => {
    fetch(`${API_URL}/books/search_book/${this.state.search}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          matches: res.data.slice(0, 5),
          current_book_id: res.data[0].book_id,
        })
      )
      .then(() => this.props.onChange(this.state.current_book_id));
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
                window.location.href = `/recommend?book_id=${book.book_id}&include_saga=${this.props.include_saga}`;
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
