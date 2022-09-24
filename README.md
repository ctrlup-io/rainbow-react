<p align="center">
  <img
    width="300px"
    src="https://user-images.githubusercontent.com/26886259/151982539-29cabe30-663e-4d2d-8271-1139734c107f.jpg"
    alt="Spongebob Rainbow" />
</p>

<h1 align="center">Rainbow React</h1>

<p align="center">Ctrl Up Design System library for web applications</p>

## Introduction

Ctrl Up Design System is the framework that helps our ecosystem to design and develop consistent and quality experiences. For its [Digital section](https://www.figma.com/file/CL28EqRgZSExkBjDJnmkDV/Ctrl-Up---Site-V2?node-id=515%3A3205), it is called Rainbow.

This repository hosts a React library for web applications.

## Package

This package provides you with a library of [React](https://reactjs.org/) components:

<table>
  <tr>
    <th>@ctrlup/rainbow-react</th>
    <td><a target="_blank" href="https://rainbow-react.netlify.app/"><img src="https://img.shields.io/badge/storybook-react-61DAFB?style=flat&logo=storybook" alt="storybook" /></a></a></td>
    <td><a target="_blank" href="https://www.npmjs.com/@ctrlup/rainbow-react"><img src="https://img.shields.io/npm/v/@ctrlup/rainbow-react?style=flat&logo=npm" alt="npm version" /></a></td>
  </tr>
</table>

## Contributing

The best way to achieve this is together! That's why we are on GitHub. We would love contributions from the community (bug reports, feature requests, suggestions, Pull Requests, whatever you want!).

[Npm](https://docs.npmjs.com/) is used as package manager. [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) is used to manage the whole package release workflow.

To setup your local dev environment:

1. Install [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

2. Clone repository

```sh
git clone git@github.com:ctrlup-io/rainbow-react.git
cd rainbow-react
```

3. Install dependencies

```sh
yarn install
```

4. See [more available scripts](README.md#scripts)

## Available Scripts

In the project directory, you can run:

### `commit`

Runs the [`git-cz`](https://github.com/streamich/git-cz) CLI to generate commit messages according to the [_Conventional Commit specifications_](https://www.conventionalcommits.org/en/v1.0.0/#specification).

### `format`

Runs [Prettier](https://prettier.io/) with [basic configuration](https://prettier.io/docs/en/configuration.html#basic-configuration).

We recommend to use Prettier in your IDE, e.g. in Visual Studio code with [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### `lint`

Runs [ESLint](https://eslint.org/).

### `build`

Bundles with [Parcel](https://parceljs.org/features/cli/#parcel-build-%3Centries%3E).

It generates report in [`parcel-bundler-reports`](./parcel-bundler-reports) folder. To serve it, run :

```sh
npx live-server parcel-bundle-reports/module.html
```

### `release:dry`

Runs [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) in dry-run mode. It allows you to preview the pending release.

You have to set `NPM_TOKEN` and `GITHUB_TOKEN` in `.env` file.

### `storybook`

Runs [Storybook](https://storybook.js.org/) on http://localhost:6006/.

Learn how to write stories on [official documentation](https://storybook.js.org/docs/react/writing-stories/introduction).

### `storybook:build`

Bundles Storybook app with [Webpack](https://webpack.js.org/).
See more on [Publish Storybook documentation](https://storybook.js.org/docs/react/sharing/publish-storybook).

### `test`

Runs unit-test suite with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

To use the full power of the Jest Watcher and LCOV coverage reporter we recommend to use the following scripts concurrently:

- `test:watch`
- `test:coverage`
