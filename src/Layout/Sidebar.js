import format from "date-fns/format";
import React from "react";
import Typography from "../components/Typography";

function Sidebar({ posts }) {
  const renderItem = ({ title, metadata: { publishedAt } }) => (
    <li key={title}>
      <Typography variant="h6" className="no-mb">
        {title}
      </Typography>
      <Typography variant="caption" fontWeight="bold">
        {format(new Date(publishedAt), "dd/MM/yyyy")}
      </Typography>
    </li>
  );

  return (
    <aside>
      <Typography variant="h5" fontWeight="medium" color="gray">
        Últimas notícias
      </Typography>
      <ul className="list-unstyled">{posts.map(renderItem)}</ul>
    </aside>
  );
}

export default Sidebar;
