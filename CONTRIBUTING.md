# Thanks for helping with Rainbow Barf!


```
npm install
```

## The Setup

I'm using [Node + npm](https://nodejs.org/) and [Jest](https://jestjs.io/) for testing. After forking and cloning, head over to [nodejs.org](https://nodejs.org/) and get Node installed (in comes with npm build in). Then simply run

```shell
  npm install
```

To run tests run once,

```text
> npm test
```

To watch file changes and run tests,

```text
> npm run watch
```

To generate a coverage report,

```text
> npm run coverage
```

## Committing

If you are commiting work referenced in an issue, please reference that ticket in your commit message. **To reference and issue** simpley add a pound sign (#) followed by the issue number. Like so,

```plain
  Doing some work on issue #99, but it's not finished yet.
```

This commit would be referenced in issue number **#99**. To close a ticket from a commit message, please use the word `fixed` somewhere in the commit message. Like so,

```plain
  fixes #99: finishing off some work on issue 99
```

### Emoji

Taking a hint from [other projects](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages), I encourage the use of [emoji](http://www.emoji-cheat-sheet.com/) in commit messages. It's the cheer that gets us through the hard times. Here is a running list of *"standards"*, but liberal use of emoji is encouraged.

+ :traffic_light: `:traffic_light:` - When writing tests
+ :memo: `:memo:` - When writing documentation
+ :bug: `:bug:` - When fixing a bug
+ :sparkles: `:sparkles:` - When adding a feature
+ :art: `:art:` - When refactoring
+ :shirt: `:shirt:` - When removing linter warnings
+ :nut_and_bolt: `:nut_and_bolt:` - When working on the build tools
+ :up: `:up:` - When upgrading dependencies
