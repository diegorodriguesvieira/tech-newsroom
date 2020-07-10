import React from "react";
import Icon from "../Icon";
import Typography from "../Typography";
import styles from "./SocialShare.scss";

const url = window.location.href;
const whatsApp = `https://wa.me/?text=${url}`;
const twitter = `https://twitter.com/intent/tweet?text=${url}`;
const facebok = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

function SocialShare() {
  return (
    <div>
      <a
        className={styles.socialShare}
        href={facebok}
        rel="noreferrer"
        target="_blank"
      >
        <Typography className="sr-only">Facebook</Typography>
        <Icon name="facebook" />
      </a>
      <a className={styles.socialShare} href={twitter} rel="noreferrer">
        <Typography className="sr-only">Twitter</Typography>
        <Icon name="twitter" />
      </a>
      <a className={styles.socialShare} href={whatsApp} rel="noreferrer">
        <Typography className="sr-only">WhatsApp</Typography>
        <Icon name="whatsapp" />
      </a>
    </div>
  );
}

export default SocialShare;
