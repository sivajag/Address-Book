/*jslint white: false, onevar: false nomen: false browser: true */
/*global alert, window,$ */


AddressList = function(){
    
    this.show = function(){
        $.getJSON("addresses", function(json) {
            $("#address-list").html(" <tr> <th>Name</th> <th>Action</th> </tr>");
            $.each(json,function(i,data) {
                $("#address-list").append("<tr id=\"address-"+ data.id +" \"><td>" + data.name + "</td><td align='center'>" + action_links(data) + "</td></tr>");
            });
        });
    };

};