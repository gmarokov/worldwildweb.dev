import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
// import themeLight from 'prism-react-renderer/themes/github';
// import themeDark from 'prism-react-renderer/themes/dracula';
// import { isDarkTheme } from '../../utils/theme-checker';

const PrismSyntaxHighlight = ({ children, className }) => {
  // const theme = isDarkTheme() ? themeDark : themeLight;
  const language = className.replace(/language-/gm, '');
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={style}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
};

export default PrismSyntaxHighlight;
