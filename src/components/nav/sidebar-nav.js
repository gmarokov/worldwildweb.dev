import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { AppContext } from '../../context/app-context';

import NavigationIcon from './navigation-icon';
import SiteSearch from '../search/site-search';

import { useNavigation } from '../../hooks/use-navigation';
import { useAllMdx } from '../../hooks/use-all-mdx';

const SidebarNav = ({ pathname }) => {
  const navigation = useNavigation();
  const allMdx = useAllMdx();

  return (
    <AppContext.Consumer>
      {({ isNavOpen, handleNav }) => {
        return (
          <nav
            className={`site-nav lg:block fixed z-30 inset-0 top-[4.8rem] transition-all duration-300
            ${isNavOpen ? 'left-[max(0px,calc(50%-45rem))]' : 'left-[-240px] lg:left-[max(0px,calc(50%-45rem))]'} 
            right-auto w-[14.5rem] pb-10 px-6 overflow-y-auto border-r m-border m-background`}
          >
            <div className="pt-10 pb-4">
              <SiteSearch nodes={allMdx} />
            </div>
            <div className="relative">
              <ul>
                {navigation.pages.map((page, index) => {
                  const {
                    fields: { slug },
                    frontmatter: { title, icon }
                  } = page;

                  const isIndex = slug === '/' && pathname !== '/' ? true : false;

                  return (
                    <li key={index} className="text-lg mb-2">
                      <Link
                        onClick={handleNav}
                        to={slug}
                        activeClassName={isIndex ? '' : 'm-active-link'}
                        partiallyActive={true}
                        className="m-navigation m-btn"
                      >
                        <NavigationIcon icon={icon} />
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <hr className="border m-border my-8" />
              <ul>
                {navigation.links.map((link, index) => {
                  const { url, title, icon, rel } = link;
                  return (
                    <li key={index} className="text-lg mb-2">
                      <a
                        key={index}
                        onClick={handleNav}
                        href={url}
                        target="_blank"
                        rel={`noreferrer ${rel}`}
                        className="m-navigation m-btn"
                      >
                        <NavigationIcon icon={icon} />
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        );
      }}
    </AppContext.Consumer>
  );
};

SidebarNav.propTypes = {
  /** The currently pathname */
  pathname: PropTypes.string.isRequired
};

export default SidebarNav;
