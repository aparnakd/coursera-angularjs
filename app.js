(function () {
  'use strict';
  angular.module('MyFirstApp',[])
 .controller('MyFirstController', function ($scope) {
   $scope.name = "";
   $scope.totalValue = 0
   $scope.displayNumeric = function(){
     var totalNamevalue = calculateNumericString($scope.name);
     $scope.totalValue = totalNamevalue;
    // return "Hello Coursera";
   };

   function calculateNumericString(string){
     var totalStringValue = 0;
     for(var i = 0;i < string.length; i++){
       totalStringValue += string.charCodeAt(i);
     }
     return totalStringValue;
   }
 });
})();
