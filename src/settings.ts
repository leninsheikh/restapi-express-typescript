import path from 'path'
const md = require('module-alias');

/**
 * initializing dotEnv
 */
require('dotenv').config();

/**
 * applications source
 * @var src
 */
const src = path.dirname(process.mainModule!.filename)



/**
 * registering module aliases
 */
md.addAliases({
    '@src'  : src
  })
