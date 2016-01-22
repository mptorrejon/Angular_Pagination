var App = angular.module("app", [])
    .controller('appCtrl', function($scope, $http){
        $scope.pageNumber = 1;
        $scope.leftArrow = "left";
        $scope.rightArrow = "right";
        $scope.display = 10;
        $scope.data  = "";
        var myd = ""
        $http.get("https://restcountries.eu/rest/v1/all")
            .success(function(mydata){
                myd = mydata;
                var tempData = mydata.slice(0, 10);
                $scope.data = tempData;
            })
            .error(function(myerr){
                console.log(myerr);
            });
        $scope.Arrow = function(which){
            switch(which){
                case 'left':
                    $scope.data = myd.splice( ($scope.pageNumber*10)-20, 10 );
                    $scope.pageNumber--;
                break
                case 'right':
                    $scope.data = myd.splice(11, 10);
                    console.log(myd);
                    $scope.pageNumber++;
                break;
            }
        }
        $scope.displayMore = function(){
            console.log("change records per page");
        }
    });
//injectable factory to paginate tables with lots of rows.
//slices API response in ranges with delimeters (rangeFrom, rangeTo)
App.factory("pagination", function(){
    return {
        goto : function(whichPage, mydata){
        //overwrites whichPage variable depending if last or first is selexted
            if(whichPage=="first")  whichPage = 1;
            else if(whichPage=="last") whichPage = Math.ceil(mydata.length/PAGINATION_MAX);
            var rangeFrom = ((whichPage-1)*PAGINATION_MAX)+1 || 0; //sets range From
            var rangeTo = whichPage*PAGINATION_MAX || PAGINATION_MAX; //sets range To
            $(".pagLink").css("text-decoration","none");
            $("#page_"+whichPage).css("text-decoration","underline");
        return  mydata.slice(rangeFrom, rangeTo); //slices data according to what range has been selected
        }
    }
});

                                                                                                
