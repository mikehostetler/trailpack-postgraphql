const joi = require('joi')

/*
 * See
 * https://github.com/postgraphql/postgraphql/blob/master/docs/library.md#postgraphqlpgconfig-schemaname--public-options
 * for details on these options
 */
postgraphqlConfigSchema = joi.object().keys({

  // Trailpack config options
  pgConfig: joi.string(),
  schemaName: joi.string(),

  // Upstream config options
  opts: joi.object().keys({
    classicIds: joi.string().optional(),
    dynamicJson: joi.boolean().optional(),
    disableDefaultMutations: joi.boolean().optional(),
    graphqlRoute: joi.string().optional(),
    graphiql: joi.boolean().optional(),
    graphiqlRoute: joi.string().optional(),
    pgDefaultRole: joi.string().optional(),
    jwtSecret: joi.string().optional(),
    jwtAudiences: joi.string().optional(),
    jwtPgTypeIdentifier: joi.string().optional(),
    watchPg: joi.boolean().optional(),
    disableQueryLog: joi.boolean().optional(),
    enableCors: joi.boolean().optional(),
    exportJsonSchemaPath: joi.string().optional(),
    exportGqlSchemaPath: joi.string().optional(),
    bodySizeLimit: joi.string().optional()
  }).unknown().required()
})

module.exports = {
  validatePostgraphqlConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, postgraphqlConfigSchema, (err, value) => {
        if (err) {
          return reject(new TypeError('config.postgraphql: ' + err))
        }

        return resolve(value)
      })
    })
  }
}
