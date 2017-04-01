# trailpack-postgraphql

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Trailpack that integrates Postgraphql to automatically generate a GraphQL endpoint for your Postgres database

## Install

```sh
$ npm install --save trailpack-postgraphql
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-postgraphql')
  ]
}
```

[npm-image]: https://img.shields.io/npm/v/trailpack-postgraphql.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-postgraphql
[ci-image]: https://img.shields.io/travis//trailpack-postgraphql/master.svg?style=flat-square
[ci-url]: https://travis-ci.org//trailpack-postgraphql
[daviddm-image]: http://img.shields.io/david//trailpack-postgraphql.svg?style=flat-square
[daviddm-url]: https://david-dm.org//trailpack-postgraphql
[codeclimate-image]: https://img.shields.io/codeclimate/github//trailpack-postgraphql.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github//trailpack-postgraphql

