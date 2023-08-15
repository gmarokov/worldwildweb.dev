import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import { AppContext } from '../../context/app-context';
import Logo from './logo';
import MenuIcon from './menu-icon';

const Header = () => {
  const [isDark, isDarkSet] = useState();

  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (
      localStorage.getItem('color-theme') === 'light' ||
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
    ) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      themeToggleDarkIcon.classList.remove('hidden');
      isDarkSet(false);
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      themeToggleLightIcon.classList.remove('hidden');
      isDarkSet(true);
    }
  }, []);

  const onThemeSwitch = () => {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    isDarkSet(!isDark);
    themeToggleDarkIcon.classList.add('hidden');
    themeToggleLightIcon.classList.add('hidden');

    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      themeToggleDarkIcon.classList.remove('hidden');
    } else {
      themeToggleLightIcon.classList.remove('hidden');
    }

    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  };

  return (
    <AppContext.Consumer>
      {({ isNavOpen, handleNav }) => {
        return (
          <header className="sticky top-0 z-40 w-full flex-none backdrop-blur border-b m-border m-background lg:bg-transparent">
            <div className="max-w-8xl mx-auto">
              <div className="py-4 mx-4 lg:px-8 lg:mx-0">
                <div className="relative flex items-center">
                  <Link className="flex items-center" to="/">
                    <span className="sr-only">Georgi Marokov's Site</span>
                    <Logo isDark={isDark} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => onThemeSwitch()}
                    className="relative flex items-center rounded-lg text-sm p-2.5 ml-auto m-btn"
                  >
                    <svg
                      id="theme-toggle-dark-icon"
                      class="h-6 w-6 hidden"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg
                      id="theme-toggle-light-icon"
                      class="h-6 w-6 hidden"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div className="relative flex lg:hidden items-center ml-6">
                    <button className="rounded-lg p-2.5 justify-center m-btn" onClick={handleNav}>
                      <span className="sr-only">Navigation</span>
                      <MenuIcon isNavOpen={isNavOpen} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Header;
