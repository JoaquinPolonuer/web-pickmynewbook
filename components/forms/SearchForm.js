import React from "react";
import styles from "../../styles/SearchBar.module.css";
import SearchBar from "../home/SearchBar";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      include_author: false,
      include_saga: false,
      selected_book: 1,
    };
    this.SearchBar = React.createRef();
  }
  handleCheckBox = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  SearchBarChange = (book_id) => {
    this.setState({ selected_book: book_id });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    window.location.href = `/recommend?book_id=${this.state.selected_book}`;
  };

  render() {
    return (
      <form className={styles.filters} onSubmit={this.onSubmitForm}>
        <SearchBar
          include_author={this.state.include_author}
          include_saga={this.state.include_saga}
          onChange={this.SearchBarChange}
        />
        <label className={styles.filterText}>
          <input
            className={styles.filterCheckbox}
            name="include_saga"
            type="checkbox"
            checked={this.state.include_saga}
            onChange={this.handleCheckBox}
          />
          Include books from the same saga
        </label>
      </form>
    );
  }
}
