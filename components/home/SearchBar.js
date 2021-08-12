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
    fetch("http://localhost:8000/books/search_book/" + this.state.search).then(
      console.log((res) => console.log(res.json()))
    );
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value }, () => {
      if (this.state.search.length > 1) {
        this.getMatches();
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
      </div>
    );
  }
}
