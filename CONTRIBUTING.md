# Thanks for helping with Rainbow Barf!

I'm using [Node + npm](https://nodejs.org/) and [Gulp](http://gulpjs.com/) when I'm developing. You will want to set these things up to get the tests to run.

## Get Setup

After forking and cloning, head over to [nodejs.org](https://nodejs.org/) and get Node installed (in comes with npm build in). Since we're using [Gulp](http://gulpjs.com/) to run our tests, you will need to have it installed globally. You can do that by running

```shell
  npm install -g gulp
```

Once you have gulp, install all the dev dependencies by running

```shell
  npm install
```

## Run the Tests

To run tests run

```text
> gulp test
```

The test setup is [Mocha](http://mochajs.org/) with [Chai](http://chaijs.com/) expect and [Istanbul](https://gotwarlost.github.io/istanbul/) for test coverage. For developer happiness, the [nyan](https://www.youtube.com/watch?v=QH2-TGUlwu4) reporter is used for `gulp test` and the reporter is used for `npm test` (for CircleCI).

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