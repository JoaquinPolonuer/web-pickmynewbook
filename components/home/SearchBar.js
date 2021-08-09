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
      <div>
        <input
          className={styles.search}
          type="text"
          placeholder="I want a book similar to..."
          value={this.state.search}
          onChange={this.handleChange}
        />
        {this.state.matches.map((match) => (
          <div className={styles.match} key={match.id}>
            <h3>{match.title}</h3>
          </div>
        ))}
      </div>
    );
  }
}
