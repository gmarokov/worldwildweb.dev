import React from 'react';
import { usePackage } from '../../hooks/use-package';

const Footer = () => {
  const packageJson = usePackage();

  return (
    <footer className="text-sm leading-6 mt-12">
      <div className="pt-10 pb-10 border-t m-border">
        <div className="mb-6 sm:mb-0 flex flex-col sm:flex-row justify-between prose dark:prose-dark">
          <p>
            <span>
              Built with{' '}
              <a target="_blank" href="https://www.gatsbyjs.com/">
                {' '}
                Gatsby <span>{packageJson.dependencies.gatsby}</span>
              </a>
            </span>
            <span>
              {' '}
              at{' '}
              <a target="_blank" href="https://github.com/gmarokov/worldwildweb.dev">
                GitHub
              </a>
              ,{' '}
            </span>
            <span>
              hosted on{' '}
              <a target="_blank" href="https://www.netlify.comhttps://app.netlify.com/sites/wwwdev/deploys">
                Netlify
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
