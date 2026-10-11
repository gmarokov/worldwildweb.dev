# Georgi Marokov's personal website [@WorldWildWeb.Dev](https://worldwildweb.dev)

[![Live](https://img.shields.io/website?label=Live&url=https%3A%2F%2Fworldwildweb.dev)](https://worldwildweb.dev)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f5f41871-632a-4cae-9eaa-f0e1275e1fdf/deploy-status)](https://app.netlify.com/sites/wwwdev/deploys)

## I'm Full stack .NET Developer [@Modeshift](https://modeshift.com)

Hi, my name is Georgi Marokov and I'm a software developer mainly working in .NET Ecosystem. I'm really into resolving complex issues, dive deep in to the
problem and finding elegant solution.

I spend my free time with family and friends, riding bikes, hiking peaks and taking pictures.

Wanna share some ideas? Don't hesitate and contact me!

[![GitLab Badge](https://img.shields.io/badge/GitLab-Profile-orange?logo=gitlab&style=flat)](https://gitlab.com/gmarokov)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-Profile-informational?style=flat&logo=linkedin&logoColor=white&color=0D76A8)](https://linkedin.com/in/georgi-marokov)
[![Dev.to Badge](https://img.shields.io/badge/Dev.to-Profile-blue?logo=dev.to&style=flat)](https://dev.to/gmarokov)
[![Outlook Badge](https://img.shields.io/badge/-georgi.marokov-c14438?style=flat&logo=microsoft-outlook&logoColor=white&link=mailto:georgi.marokov@gmail.com)](mailto:georgi.marokov@gmail.com)
[![GitHub followers](https://img.shields.io/github/followers/gmarokov?label=Follow&style=social)](https://github.com/gmarokov/?tab=follow) 

## 🚀 Quick start

1. Install Node.js >= 18
2. Install Gatsby CLI >= 5
3. Install packages: `yarn install`
4. Start site: `yarn start`
5. Locate the browser at http://localhost:8000
6. Locate GraphQL http://localhost:8000/___graphql

### Production build and Netlify

Run `yarn build` to generate the site in `public/`, then `yarn serve` to preview it locally.
Netlify should use `yarn build` as its build command and `public` as its publish directory.
All published content pages are generated at build time, including blogs and projects, so
article navigation does not depend on Netlify's deferred static generation (DSG) function.
After deploying this change, verify both a direct article URL and navigation from its index page.

### Upgrading to Node.js 22

The current `.nvmrc` pins Node.js 18.14.0. Gatsby officially supports Node.js 22 starting
with Gatsby 5.15 ([release notes](https://www.gatsbyjs.com/docs/reference/release-notes/v5.15/));
the current lockfile uses Gatsby 5.9.1. To upgrade:

1. Upgrade Gatsby to 5.15 or later and validate its plugins. The current MDX, MDX embed,
   and MDX feed plugins report Gatsby peer compatibility warnings; the MDX plugin also
   exports the obsolete `unstable_shouldOnCreateNode` API.
2. Update `.nvmrc` to `22` and `package.json`'s `engines.node` to `22.x`, then install
   dependencies and regenerate `yarn.lock` using the latest Node.js 22 patch release.
3. Run a production build and check blogs, projects, hobbies, RSS, images, and local navigation.
4. Deploy a Netlify preview with Node.js 22 and verify the same routes before production.
   Set `.nvmrc` and any Netlify `NODE_VERSION` override consistently
   ([build dependency documentation](https://docs.netlify.com/build/configure-builds/manage-dependencies/)).
   Check any separately configured Functions runtime as well, since the newsletter uses a Gatsby Function.

Changing only Netlify's dependency management UI setting will not override the existing `.nvmrc` pin.

### Commitlint common types 
build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test
