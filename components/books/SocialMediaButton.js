import React from "react";
import Image from "next/image";

import styles from "../../styles/SocialMediaButton.module.css";

export default class SocialMediaButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={this.props.icon} />
        </div>
        <span>{this.props.title}</span>
      </div>
    );
  }
}
