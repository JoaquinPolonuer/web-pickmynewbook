import React from "react";
import { withRouter } from "next/router";
import { API_URL } from "../../constants";

import SocialMediaButton from "../../components/books/SocialMediaButton";
import styles from "./../../styles/Books.module.css";

import GoodreadsImage from "../../public/socialmedia/goodreads.png";
import ReactLoading from "react-loading";

export default withRouter(
  class Books extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        book_info: {},
        loading: true
      };
    }

    static async getInitialProps({ query }) {
      const { book_id } = query;
      if (book_id) {
        return { book_id };
      }
      return {};
    }

    parseBookInfo = (book, callback) =>{
      var description = book.description
      var first_word = book.description.split(" ")[0]
      var length_first_word = first_word.length
      var description_without_first_word = description.substring(length_first_word+1)
      var index_of_repeated_first_word = description_without_first_word.indexOf(first_word)

      book.description = description_without_first_word.substring(index_of_repeated_first_word)
      callback(book)
    }
    componentDidMount() {
      const book_id = this.props.router.query.book_id;
      fetch(`${API_URL}/books/book_by_id/${book_id}`)
        .then((res) => res.json())
        .then((res) =>
          this.parseBookInfo(res.data, (book)=>{
            this.setState({
              book_info: book,
              loading: false
            })
          })
        );
    }

    render() {
      const { book_info } = this.state;
      return (

        <div className={styles.container}>
          {!this.state.loading ? (
            <>
              <div className={styles.content}>
                <span className={styles.title}>{book_info.title}</span>
                <span className={styles.authortitle}>{book_info.authors}</span>
                <p className={styles.description}>{book_info.description}</p>
                <div className={styles.buttonsContainer}>
                  <SocialMediaButton
                    title="View on Goodreads"
                    icon={GoodreadsImage}
                    url={`https://www.goodreads.com/book/show/${book_info.goodreads_book_id}`}
                  />
                </div>
              </div>
              <div className={styles.bookcoverContainer}>
                <img className={styles.bookcover} src={book_info.image_url} />
              </div>
            </>
          ) : (
            this.state.loading && (
              <div className={styles.loadingContainer}>
                <ReactLoading className={styles.loading} color="#EFB035" width={"20vw"} />
              </div>
            )
          )}

        </div>
      );
    }
  }
);
