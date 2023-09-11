import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import { AppContext } from '../../context/app-context';
import Logo from './logo';
import MenuIcon from './menu-icon';
import ThemeSwitcherIcon from './theme-switcher-icon';

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
              <div className="py-4 mx-4 lg:pr-8 lg:pl-3 2xl:pl-0 lg:mx-0">
                <div className="relative flex items-center">
                  <Link className="relative" to="/">
                    <span className="sr-only">Georgi Marokov's Site</span>
                    <div className="m-svg-container w-11/12 lg:w-full">
                      <Logo isDark={isDark} />
                    </div>
                  </Link>
                  <div className="relative flex items-center ml-auto">
                    <button
                      type="button"
                      onClick={() => onThemeSwitch()}
                      className="rounded p-2.5 m-btn lg:border m-border"
                    >
                      <ThemeSwitcherIcon />
                    </button>
                    <button className="lg:hidden rounded p-2.5 m-btn ml-2" onClick={handleNav}>
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
