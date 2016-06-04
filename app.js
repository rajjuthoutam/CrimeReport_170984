/**
 * Created by Raj on 5/26/16.
 */
angular.module('CrimeStreet',[])
    .controller('CrimeController',['$scope',function($scope){
        $scope.master = {};

        $scope.update = function(suspect){

            $scope.master = angular.copy(suspect);
        };
        $scope.backToNorm = function(){
            angular.copy($scope.master,$scope.suspect);
        };

        $scope.clearForm = function(){
            $scope.suspect = {};
        };

        $scope.backToNorm();




    }]);