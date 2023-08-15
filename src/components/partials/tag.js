import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ tag }) => {
  return <span className="rounded-xl m-border border text-sm px-2.5 py-1 ">{tag}</span>;
};

Tag.propTypes = {
  /** The tag to display */
  tag: PropTypes.string.isRequired
};

export default Tag;
