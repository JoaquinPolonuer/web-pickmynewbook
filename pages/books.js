import React from "react";
import SocialMediaButton from "../components/books/SocialMediaButton";
import styles from "./../styles/Books.module.css";

import GoodreadsImage from "../public/socialmedia/goodreads.png";
import KindleImage from "../public/socialmedia/kindle.png";
import PlayBooksImage from "../public/socialmedia/playbooks.png";

export default class Books extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.title}>Foundation</span>
          <span className={styles.authortitle}>By Isaac Asimov</span>
          <span className={styles.description}>
            Dark forces are at work at the House of Night and Zoey
            Redbird\u00e2\u0080\u0099s adventures at the school take a
            mysterious turn. Her best friend, Stevie Rae, is undead and
            struggling to maintain a grip on her humanity. Zoey finds herself in
            the very unexpected and rare situation of having three boyfriends.
            Mix a little bloodlust into the equation and the situation has the
            potential to sp Dark forces are at work at the House of Night and
            Zoey Redbird\u00e2\u0080\u0099s adventures at the school take a
            mysterious turn. Her best friend, Stevie Rae, is undead and
            struggling to maintain a grip on her humanity. Zoey finds herself in
            the very unexpected and rare situation of having three boyfriends.
            Mix a little bloodlust into the equation and the situation has the
            potential to spell social disaster. Just when it seems things
            couldn\u00e2\u0080\u0099t get any tougher, vampyres
          </span>
          <div className={styles.buttonsContainer}>
            <SocialMediaButton
              url=""
              title="View on Goodreads"
              icon={GoodreadsImage}
            />
            <SocialMediaButton
              url=""
              title="View on Kindle"
              icon={KindleImage}
            />
            <SocialMediaButton
              url=""
              title="View on Play Books"
              icon={PlayBooksImage}
            />
          </div>
        </div>
        <div className={styles.bookcover}>
          <img src="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg" />
        </div>
      </div>
    );
  }
}
