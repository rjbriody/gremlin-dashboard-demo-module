'use strict';

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
