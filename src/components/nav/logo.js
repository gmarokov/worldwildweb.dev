import React from 'react';
import DarkLogo from './../../../static/images/worldwildwebdev-dark-logo.svg';
import LightLogo from './../../../static/images/worldwildwebdev-light-logo.svg';

const Logo = ({ isDark }) => {
  return isDark ? <DarkLogo /> : <LightLogo />;
};

export default Logo;
