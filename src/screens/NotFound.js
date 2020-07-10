import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import Typography from "../components/Typography";

function Home() {
  return (
    <div
      data-testid="not-found-screen"
      className={clsx("not-found", "mt-5", "ml-5")}
    >
      <Typography variant="h1">Página não encontrada</Typography>
      <Typography component={Link} to="/" color="primary">
        Voltar
      </Typography>
    </div>
  );
}

export default Home;
