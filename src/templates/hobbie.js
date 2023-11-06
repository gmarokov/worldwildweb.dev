import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import MdxParser from '../components/partials/mdx-parser';
import AsideElement from '../components/aside/aside-element';
import DateStamp from '../components/partials/date-stamp';
import GenericAside from '../components/aside/generic-aside';
import Tag from '../components/partials/tag';
import Seo from '../components/partials/seo';

const Page = ({
  data: {
    mdx: {
      fields: { slug },
      excerpt,
      frontmatter: { type, title, date, role, category, tags },
      body
    }
  }
}) => {
  return (
    <Fragment>
      <div className="grid lg:grid-cols-1fr-auto">
        <DateStamp date={date} />
        <small className="leading-6 font-semibold m-sub-text">
          Category &bull; {role} &#124; {category}
        </small>
      </div>
      <h1 className="my-12 m-page-heading">{title}</h1>
      <ul className="list-none m-0 p-0 flex flex-wrap gap-2 mb-12">
        {tags
          ? tags.map((tag, index) => {
              return (
                <li key={index} className="m-0 p-0">
                  <Tag tag={tag} />
                </li>
              );
            })
          : null}
      </ul>
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
        date(formatString: "MMMM DD, YYYY")
        role
        category
        tags
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
      frontmatter: { type, title, tags }
    }
  }
}) => {
  return <Seo type="article" title={title} description={excerpt} slug={slug} tags={tags} />;
};
