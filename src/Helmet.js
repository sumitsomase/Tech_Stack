import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";

function Helmet({ title, description, keywords }) {
  return (
    <ReactHelmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Tech Stack Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </ReactHelmet>
  );
}

export default Helmet;
