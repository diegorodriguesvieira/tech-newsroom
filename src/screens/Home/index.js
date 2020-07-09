import React from "react";
import Header from "../../components/Header";
import Select from "../../components/Select";
import Typography from "../../components/Typography";

function Home() {
  return (
    <div data-testid="home-screen" className="home">
      <Header />
      <Typography variant="h1" color="primary">
        Home
      </Typography>
      <Typography variant="h2">Home</Typography>
      <Typography variant="h3">Home</Typography>
      <Typography variant="h4">Home</Typography>
      <Typography variant="h5">Home</Typography>
      <Typography variant="h6">Home</Typography>
      <Typography variant="body1">Home</Typography>
      <Typography variant="caption">Home</Typography>
      <Select
        label="Filtrar por autor"
        options={[
          { label: "Diego", value: 1 },
          { label: "Kamilla", value: 2 },
        ]}
      />
      <Select
        label="Ordenar por"
        options={[
          { label: "Mais recentes", value: 1 },
          { label: "Mais antigos", value: 2 },
        ]}
      />
      <Typography>
        Id irure duis aute ipsum nostrud Lorem. Dolor mollit culpa ut pariatur
        laboris ullamco consectetur laboris minim non occaecat tempor ad esse.
        In commodo ullamco nulla do non Lorem amet dolore nulla velit commodo.
        Qui aliquip nisi nostrud quis anim. Id pariatur labore et et officia
        voluptate. Velit velit proident nulla nostrud sit elit nulla culpa
        commodo qui sint incididunt nostrud minim. Ex consectetur laboris dolor
        ut ipsum in ullamco dolore do.
      </Typography>
    </div>
  );
}

export default Home;
