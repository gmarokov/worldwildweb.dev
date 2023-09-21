import React, { Fragment } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import NavigationIcon from '../nav/navigation-icon';
import RecentGitHubUserEvent from '../partials/recent-github-user-events';

const GenericAside = () => {
  return (
    <Fragment>
      <div className="grid gap-4 rounded border m-border px-4 sm:px-6 py-6">
        <StaticImage
          alt="Introducing Gatsby 4"
          src="../../../static/images/aside-georgi.png"
          className="block rounded-full border-2 m-border h-28 w-28 m-0 mx-auto"
        />
        <div className="mb-4">
          <h5 className="mb-0 text-base text-center leading-6 font-semibold uppercase">Georgi Marokov</h5>
          <p className="mb-0 m-sub-text text-sm text-center m-0">
            Software Engineer{' '}
            <a href="https://twitter.com/GoModeshift" target="_blank" rel="noreferrer">
              @Modeshift
            </a>
          </p>
        </div>
        <a
          href="https://x.com/MarokovGeorgi"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 no-underline text-sm text-center py-2 px-4 transition-all duration-300 rounded border m-border m-btn"
        >
           <NavigationIcon icon="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
           Follow on X
        </a>
      </div>
      <RecentGitHubUserEvent />
    </Fragment>
  );
};

export default GenericAside;
