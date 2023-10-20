export const isDarkTheme = () => {
  if (
    localStorage.getItem('color-theme') === 'light' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
  ) {
    return false;
  } else {
    return true;
  }
};
