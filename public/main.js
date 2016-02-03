var App = angular.module("app", []);
App.controller('appCtrl', function($scope, $http){
    $scope.pageNumber = 1; //default pagen number
    $scope.displayOptions = [
        {option: 10}, 
        {option: 15}, 
        {option:20}, 
        {option:25}
    ]; //data to build total records per page display
    $scope.display = 10; // default for total records to display
    $scope.data  = ""; //initialize data holder
    var myd = "" //initialize tmp data holder
    $scope.init = function(){ //wraps API get so it can be call when total records per page change 
        $http.get("https://restcountries.eu/rest/v1/all")
        .success(function(mydata){
            myd = mydata;
            $scope.data = mydata.slice(0, $scope.display-1);
            console.log($scope.data);
        })
        .error(function(myerr){
            console.log(myerr);
        });    
    }
    $scope.init(); //tables gets bootstrapped
    $scope.Arrow = function(which){ //arrow table controllers
        switch(which){
            case 'left':
                $scope.data = myd.slice( ($scope.pageNumber*$scope.display)-($scope.display*2), $scope.display*($scope.pageNumber-1) );
                $scope.pageNumber--;
            break
            case 'right':
                $scope.data = myd.slice( ($scope.pageNumber*$scope.display), $scope.display*($scope.pageNumber+1));
                $scope.pageNumber++;
            break;
        }    
    }
    $scope.changedValue = function(val){//dropdown records per page controller
        $scope.display = val.option;
        $scope.init();
    }
});
