import React from "react";
import Image from "next/image";
import styles from "./../../styles/BackButton.module.css";
import LeftArrow from "./../../public/leftarrow.png";

class BackButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToHomepage = () => {
    window.location.href = `/`;
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.backButton} onClick={this.goToHomepage}>
          <div className={styles.image}>
            <Image src={LeftArrow} />
          </div>
          <span className={styles.text}>Back to Homepage</span>
        </div>
      </div>
    );
  }
}

export default BackButton;
