import React from "react";
import styles from "../../styles/SearchBar.module.css";
import SearchBar from "../home/SearchBar";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      include_author: false,
      include_saga: false,
    };
  }
  handleCheckBox = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };
  render() {
    return (
      <form className={styles.filters}>
        <SearchBar
          include_author={this.state.include_author}
          include_saga={this.state.include_saga}
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
