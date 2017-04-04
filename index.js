'use strict'

const Trailpack = require('trailpack')
const _ = require('lodash')
const lib = require('./lib')
const postgraphql = require('postgraphql').postgraphql

module.exports = class PostgraphqlTrailpack extends Trailpack {

  /**
   * Validate that we are using Express and have all of our config options set
   */
  validate () {
    // Check that we've loaded a webserver Trailpack, currently supports Hapi & Express
    this.log.debug('trailpack-postgraphql: PostgraphqlTrailpack::Validate')

    if (!_.includes(_.keys(this.app.packs), 'express')) {
      return Promise.reject(new Error('This Trailpack currently only works with Express as a web server !'))
    }

    if (!this.app.config.postgraphql) {
      return Promise.reject(new Error('No configuration found at config.postgraphql! Check the README of http://github.com/mikehostetler/trailpack-postgraphql for install instructions.'))
    }

    /*
     * Check that 'postgraphql' exists as an element of 
     * this.app.config.web.middlewares.order
     */
    if (!_.includes(this.app.config.web.middlewares.order, 'postgraphql')) {
      return Promise.reject(new Error('You must include `postgraphql` in the web middleware order! Check the README of http://github.com/mikehostetler/trailpack-postgraphql for install instructions'))
    }

    return Promise.all([
      lib.Validator.validatePostgraphqlConfig(this.app.config.passport)
    ])
  }

  /**
   * TODO document method
   */
  configure () {
    this.log.info('trailpack-postgraphql: PostgraphqlTrailpack::Configure')

    // Add the Postgraphql Middleware with our defined config options
    this.app.config.web.middlewares.postgraphql 
      = postgraphql(
          this.app.config.postgraphql.pgConfig, 
          this.app.config.postgraphql.schemaName, 
          this.app.config.postgraphql.opts
        );

    return Promise.resolve();
  }

  /**
   * TODO document method
   */
  initialize () {
    // Nothing to do here
    return Promise.resolve();
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      pkg: require('./package')
    })
  }
}

