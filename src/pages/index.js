import React from "react";

import Layout from "../components/Layout";

import "../styles/main.scss";

export default ({data}) => {
	const chars = data.site.siteMetadata.testCharacters;

  return <Layout characters={chars}/>;
};

export const query = graphql`
  query CharacterQuery {
    site {
      siteMetadata {
        testCharacters
      }
    }
  }
`
