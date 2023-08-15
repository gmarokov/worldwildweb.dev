import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import DateStamp from '../partials/date-stamp';

const ProjectCard = ({ link, title, thumbnail, date, dateModified, excerpt }) => {
  return (
    <li className="m-0 p-0 border-b m-border transition-all m-content-item hover:-translate-y-1 ease-in-out duration-500">
      <Link to={link} className="block p-4 cursor-pointer no-underline">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="rounded shadow-lg overflow-hidden shrink-0 w-[320px]">
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

ProjectCard.propTypes = {
  /** The post to link to */
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

export default ProjectCard;
