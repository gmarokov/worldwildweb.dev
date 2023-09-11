import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import BlogCard from './blog-card';

const LatestBlogs = () => {
  const {
    allMdx: { nodes }
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: { frontmatter: { status: { ne: "draft" }, type: { eq: "blog" } } }
        sort: { frontmatter: { date: DESC } }
        limit: 3
      ) {
        nodes {
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            dateModified(formatString: "MMMM DD, YYYY")
          }
          featuredImage {
            childImageSharp {
              thumbnail: gatsbyImageData(width: 180)
            }
          }
        }
      }
    }
  `);

  return (
    <section>
      <h2 className="m-0 text-2xl uppercase">Latest Blog posts</h2>
      <p className="mt-0 mb-8 text-base m-sub-text">
        Here's the latest posts I've written and published here on my site.
      </p>
      <ul className="grid gap-8 list-none m-0 mb-8 p-0">
        {nodes.map((node, index) => {
          const {
            fields: { slug },
            excerpt,
            frontmatter: { title, date, dateModified },
            featuredImage: {
              childImageSharp: { thumbnail }
            }
          } = node;

          return (
            <BlogCard
              key={index}
              link={slug}
              title={title}
              thumbnail={thumbnail}
              date={date}
              dateModified={dateModified}
              excerpt={excerpt}
            />
          );
        })}
      </ul>
      <div className="flex">
        <Link to="/blogs" className="flex gap-2 py-1 px-3 rounded m-btn no-underline">
          More blogs{' '}
          <span role="img" aria-label="pencil">
            ✏️
          </span>
        </Link>
      </div>
    </section>
  );
};

export default LatestBlogs;