var App = angular.module("app", []);
App.controller('appCtrl', function($scope, $http){
    $scope.pageNumber = 1;
    $scope.displayOptions = [
        {option: 10}, 
        {option: 15}, 
        {option:20}, 
        {option:25}
    ];
    $scope.display = 10;
    $scope.data  = "";
    var myd = ""
    $scope.init = function(){
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
    $scope.init();
    $scope.Arrow = function(which){
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
    $scope.changedValue = function(val){
        $scope.display = val.option;
        $scope.init();
    }
});
