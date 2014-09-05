'use strict';

module.exports = function DemoController($scope) {

    $scope.showMessage = function () {
        // This scope contains the shared object from Gremlin Dashboard's main scope.
        alert(JSON.stringify($scope.shared));
    }

}
