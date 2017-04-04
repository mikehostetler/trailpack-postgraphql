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
