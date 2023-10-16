import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import HobbyCard from './hobby-card';

const LatestHobbies = () => {
  const {
    allMdx: { nodes }
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: { frontmatter: { status: { ne: "draft" }, type: { eq: "hobbie" } } }
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
            category
          }
          logo {
            childImageSharp {
              logo: gatsbyImageData(width: 24, quality: 100)
            }
          }
        }
      }
    }
  `);

  return (
    <section>
      <h2 className="m-0 text-2xl">
        <Link to="/hobbies">Trail tales </Link>
      </h2>
      <p className="mt-0 mb-8 text-base m-sub-text">Where the trail never ends...</p>
      <ul className="grid gap-8 list-none m-0 mb-8 p-0">
        {nodes.map((node, index) => {
          const {
            fields: { slug },
            excerpt,
            frontmatter: { title, date, category },
            logo: {
              childImageSharp: { logo }
            }
          } = node;

          return (
            <HobbyCard
              key={index}
              link={slug}
              title={title}
              logo={logo}
              category={category}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </ul>
      <div className="flex">
        <Link to="/hobbies" className="flex gap-2 py-1 px-3 rounded m-btn no-underline">
          <span role="img" aria-label="film projector">
            🚵🏻
          </span>{' '}
          More hobby posts
        </Link>
      </div>
    </section>
  );
};

export default LatestHobbies;
