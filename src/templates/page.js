import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import MdxParser from '../components/partials/mdx-parser';
import AsideElement from '../components/aside/aside-element';
import Seo from '../components/partials/seo';
import GenericAside from '../components/aside/generic-aside';

const Page = ({
  data: {
    mdx: {
      excerpt,
      frontmatter: { type, title },
      body
    }
  }
}) => {
  return (
    <Fragment>
      <small className="mb-4 leading-6 font-semibold capitalize m-sub-text">{title}</small>
      <MdxParser>{body}</MdxParser>
      <AsideElement>
        <GenericAside />
      </AsideElement>
    </Fragment>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      excerpt
      frontmatter {
        type
        title
      }
      body
    }
  }
`;

export default Page;

export const Head = ({
  data: {
    mdx: {
      fields: { slug },
      excerpt,
      frontmatter: { title }
    }
  }
}) => {
  return <Seo title={title} description={excerpt} slug={slug} />;
};
