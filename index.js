'use strict';

module.exports = Object.assign({}, require('./eslintrc.json'), {
  extends: [ require.resolve('eslint-config-common-jsx') ]
});
