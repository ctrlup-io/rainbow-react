## Available Scripts

In the project directory, you can run:

### `commit`

Runs the [`git-cz`](https://github.com/streamich/git-cz) CLI to generate commit messages according to the [_Conventional Commit specifications_](https://www.conventionalcommits.org/en/v1.0.0/#specification).

### `format`

Runs [Prettier](https://prettier.io/) with [basic configuration](https://prettier.io/docs/en/configuration.html#basic-configuration).

We recommend to use Prettier in your IDE, e.g. in Visual Studio code with [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### `lint`

Runs [ESLint](https://eslint.org/) with [standard configuration](https://standardjs.com/).

### `build`

Bundles with [Parcel](https://parceljs.org/features/cli/#parcel-build-%3Centries%3E).

### `release:dry`

Runs [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) in dry-run mode. It allows you to preview the pending release.

You have to set `NPM_TOKEN` and `GITHUB_TOKEN` in `.env` file.

### `storybook`

Runs [Storybook](https://storybook.js.org/) on http://localhost:6006/.

Learn how to write stories on [official documentation](https://storybook.js.org/docs/react/writing-stories/introduction).

### `storybook:build`

Bundles Storybook app with [Webpack](https://webpack.js.org/).
See more on [Publish Storybook documentation](https://storybook.js.org/docs/react/sharing/publish-storybook).
