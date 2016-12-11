(function (app) {
    'use strict'

    app.filter('range', function () {
        return function (item,per_page,total) {

            var pagination =  Math.ceil(total/per_page);
            for(var i=1;i<=pagination;++i)
            {
                item.push(i);
                //Math.ceil(input)
            }
            return item;
        };
    });
    app.filter('status', function () {
        return function (item) {
        var returnitem="";
           if(item==1)
           {
               returnitem = "Done";
           }
            else
           {
               returnitem = "Pending";
           }
            return returnitem;
        };
    });

    app.filter('reverse', function() {
        return function(items) {
            if (!items || !items.length) { return; }
            return items.slice().reverse();
        };
    });


})(angular.module("EventTask"));