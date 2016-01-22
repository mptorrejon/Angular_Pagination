/*
//injectable factory to paginate tables with lots of rows.
//slices API response in ranges with delimeters (rangeFrom, rangeTo)
SMSApp.factory("pagination", function(){
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
                                                            */
                                                                                                                    
