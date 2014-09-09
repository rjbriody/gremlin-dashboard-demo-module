'use strict';

/**
 * Gremlin Dashboard Demo Module
 * 
 */

module.exports = function () {

  return {
    restrict: 'E',
    scope: {
      shared: '='
    },
    template: require('./template.html'),
    controller: require('./DemoController')
  };

};
