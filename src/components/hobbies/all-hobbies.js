import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HobbyCard from './hobby-card';

const AllHobbies = () => {
  const {
    allMdx: { nodes }
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: { frontmatter: { status: { ne: "draft" }, type: { eq: "hobbie" } } }
        sort: { frontmatter: { date: DESC } }
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
          featuredImage {
            childImageSharp {
              thumbnail: gatsbyImageData(width: 320)
            }
          }
        }
      }
    }
  `);

  return (
    <section>
      <ul className="mt-10 grid gap-8 list-none m-0 mb-8 p-0">
        {nodes.map((node, index) => {
          const {
            fields: { slug },
            excerpt,
            frontmatter: { title, date, category },
            featuredImage: {
              childImageSharp: { thumbnail }
            }
          } = node;

          return (
            <HobbyCard
              key={index}
              link={slug}
              title={title}
              thumbnail={thumbnail}
              category={category}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default AllHobbies;
