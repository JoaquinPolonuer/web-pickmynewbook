import React from "react";
import { withRouter } from "next/router";
import { API_URL } from "../../constants";

import SocialMediaButton from "../../components/books/SocialMediaButton";
import styles from "./../../styles/Books.module.css";

import GoodreadsImage from "../../public/socialmedia/goodreads.png";
import KindleImage from "../../public/socialmedia/kindle.png";
import PlayBooksImage from "../../public/socialmedia/playbooks.png";

export default withRouter(
  class Books extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        book_info: {},
      };
    }

    static async getInitialProps({ query }) {
      const { book_id } = query;
      if (book_id) {
        return { book_id };
      }
      return {};
    }

    componentDidMount() {
      const book_id = this.props.router.query.book_id;
      fetch(`${API_URL}/books/book_by_id/${book_id}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            book_info: res.data,
          })
        );
    }

    render() {
      const { book_info } = this.state;
      return (
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.title}>{book_info.title}</span>
            <span className={styles.authortitle}>{book_info.authors}</span>
            <span className={styles.description}>{book_info.description}</span>
            <div className={styles.buttonsContainer}>
              <SocialMediaButton
                url=""
                title="View on Goodreads"
                icon={GoodreadsImage}
                url={`https://www.goodreads.com/book/show/${book_info.goodreads_book_id}`}
              />
            </div>
          </div>
          <div className={styles.bookcoverContainer}>
            <img className={styles.bookcover} src={book_info.image_url} />
          </div>
        </div>
      );
    }
  }
);
