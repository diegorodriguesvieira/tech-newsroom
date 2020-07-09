import clsx from "clsx";
import React from "react";
import logo from "../assets/logo-gray.svg";
import Container from "../components/Container";
import Typography from "../components/Typography";
import styles from "./Footer.scss";

function Footer() {
  const getFullYear = new Date().getFullYear();

  return (
    <footer className={clsx(styles.footer, "pb-2", "pt-2")}>
      <Container className={styles.container}>
        <img className={styles.logo} alt="Tech Newsroom" src={logo} />
        <Typography block variant="caption">
          Copyright &copy; {getFullYear} Tech Newsroom. Todos os direitos
          reservados
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
