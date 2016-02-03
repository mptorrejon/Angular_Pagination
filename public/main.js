var App = angular.module("app", []);
App.controller('appCtrl', function($scope, $http){
    $scope.pageNumber = 1;
    $scope.display = 10;
    $scope.data  = "";
    var myd = ""
    $http.get("https://restcountries.eu/rest/v1/all")
        .success(function(mydata){
            myd = mydata;
            $scope.data = mydata.slice(0, $scope.display-1);
        })
        .error(function(myerr){
            console.log(myerr);
        });
    $scope.Arrow = function(which){
        console.log(myd);
        
        switch(which){
            case 'left':
                $scope.data = myd.slice( ($scope.pageNumber*$scope.display)-20, $scope.display*($scope.pageNumber-1) );
                $scope.pageNumber--;
            break
            case 'right':
                $scope.data = myd.slice( ($scope.pageNumber*$scope.display), $scope.display*($scope.pageNumber+1));
                $scope.pageNumber++;
            break;
        }    
        
        
        console.log($scope.data);
    }
    $scope.displayMore = function(){
        console.log("change records per page");
    }
});
