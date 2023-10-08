import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import DateStamp from '../partials/date-stamp';

const BlogCard = ({ link, title, thumbnail, date, dateModified, excerpt }) => {
  return (
    <li className="m-0 p-0 rounded border m-border transition-all shadow-lg hover:shadow-fuchsia/10 hover:-translate-y-2 ease-in-out duration-500">
      <Link to={link} className="block p-4 cursor-pointer no-underline">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-6 mb-2">
          <div className="rounded shadow-lg overflow-hidden shrink-0 w-auto md:w-[240px]">
            <GatsbyImage alt={title} image={getImage(thumbnail)} />
          </div>
          <div>
            <DateStamp date={dateModified ? dateModified : date} />
            <h3 className="m-0 text-xl">{title}</h3>
            <p className="m-0 text-base m-sub-text">{excerpt}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

BlogCard.propTypes = {
  /** The blog to link to */
  link: PropTypes.string.isRequired,
  /** The title to display */
  title: PropTypes.string.isRequired,
  /** Gatsby Image Data */
  thumbnail: PropTypes.any.isRequired,
  /** The dateModified to display */
  dateModified: PropTypes.string,
  /** The date to display */
  date: PropTypes.string.isRequired,
  /** The excerpt to display */
  excerpt: PropTypes.string.isRequired
};

export default BlogCard;
