import React from "react";
import Image from "next/image";

import styles from "../../styles/SocialMediaButton.module.css";

export default class SocialMediaButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book_info: {},
    };
  }

  goToMedia = () => {
    window.open(this.props.url, "_blank");
  };

  render() {
    return (
      <div className={styles.container} onClick={this.goToMedia}>
        <div className={styles.image}>
          <Image src={this.props.icon} />
        </div>
        <span>{this.props.title}</span>
      </div>
    );
  }
}
