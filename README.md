# trailpack-postgraphql

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-download]][npm-url]
[![Follow @trailsjs on Twitter][twitter-image]][twitter-url]

:package: Trailpack to integrate [Postgraphql](https://github.com/postgraphql/postgraphql/) into a Trails application

### WARNING : 

This Trailpack work only with [trailpack-express](https://github.com/trailsjs/trailpack-express) as webserver 

## Intallation
With yo : 

```
npm install -g yo generator-trails
yo trails:trailpack trailpack-postgraphql
```

With npm (you will have to create config file manually) :
 
`npm install --save trailpack-postgraphql`

## Configuration

First you need to add this trailpack to your __main__ configuration : 
```js
// config/main.js

module.exports = {
   ...

   packs: [
      ...
      require('trailpack-postgraphql'),
      ...
   ]
   ...
}
```

You need to add `postgraphql` to your web middlewares:
```js
// config/web.js
middlewares: {
        order: [
          'addMethods',
          'cookieParser',
          'session',
          'postgraphql',
          'bodyParser',
          'methodOverride',
          'router',
          'www',
          '404',
          '500'
        ]
      }
```
And to configure postgraphql: 

```js
// config/postgraphql.js
'use strict'

/**
 * Postgraphql Configuration
 *
 * @see {@link http://github.com/mikehostetler/trailpack-postgraphql
 */
module.exports = {
  /**
   * Postgres connection string
   *
   * Passed directly to the `pg` module
   * Docs: https://github.com/brianc/node-postgres
   */
  pgConfig: 'postgres://localhost:5432',

  /**
   * Default Schema Name
   */
  schemaName: 'public',

  /**
   * Postraphql Options
   * See:
   * https://github.com/postgraphql/postgraphql/blob/master/docs/library.md
   */
  opts: {

    /*
    classicIds: joi.string(),
    dynamicJson: false,
    disableDefaultMutations: false,

    graphqlRoute: '/graphql',
    graphiql: false,
    graphiqlRoute: '/graphiql',
    pgDefaultRole: '',

    jwtSecret: '',
    jwtAudiences: '',
    jwtPgTypeIdentifier: '',

    watchPg: false,
    disableQueryLog: true,
    enableCors: false,

    exportJsonSchemaPath: '',
    exportGqlSchemaPath: '',
    bodySizeLimit: '100kB'
    */
  }
}
```

Then make sure to include the new file in **config/index.js**

```
//config/index.js
...
exports.postgraphql = require('./postgraphql')
```

## Usage

### GraphQL endpoint now available
You should now have a GraphQL endpoint available at http://localhost:3000/graphql

### GraphiQL
You can verify that you installed this Trailpack correctly by enabling the bundled graphiql interface which is available at http://localhost:3000/graphiql by default.

**Graphiql must be enabled in the configuration to be turned on**

## License
[MIT](https://github.com/mikehostetler/trailpack-postgraphql/blob/master/LICENSE)

<img src="http://i.imgur.com/dCjNisP.png">

[trails-image]: http://i.imgur.com/zfT2NEv.png
[trails-url]: http://trailsjs.io
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
[twitter-image]: https://img.shields.io/twitter/follow/trailsjs.svg?style=social
[twitter-url]: https://twitter.com/trailsjs

[npm-image]: https://img.shields.io/npm/v/trailpack-postgraphql.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-postgraphql
[npm-download]: https://img.shields.io/npm/dt/trailpack-postgraphql.svg
