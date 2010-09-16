/*jslint white: false, onevar: false nomen: false browser: true */
/*global alert, window,$ */

function action_links(data){
    var link = "<a class=\"address-edit-link\" href=\"addresses/"+ data.id +"\" >Edit</a>";
    link += " | <a href=\"\">delete</a>";
    return link;
}

$.fn.showAddressList = function(){
    return this.each(function(){
        var that = this;
        $.getJSON("addresses", function(json) {
            $(that).html(" <tr> <th>Name</th> <th>Action</th> </tr>");
            $.each(json,function(i,data) {
                $(that).append("<tr id=\"address-"+ data.id +" \"><td><a class=\"address-link\" href=\"addresses/" + data.id +"\">" + data.name + "</a></td><td align='center'>" + action_links(data) + "</td></tr>");
            });
        });
    });
};

function editAddress(id){
    
}

$.fn.addAddress = function(json){
    var data = json;
    var that = this;
    return this.each(function(){
        var that = this;
        $(that).append("<tr id=\"address-"+ data.id +" \"><td><a class=\"address-link\" href=\"addresses/" + data.id +"\">" + data.name + "</a></td><td align='center'>" + action_links(data) + "</td></tr>");
    });
};

$.fn.showAddress = function(json){
    var data = json;
    var that = this;
    return this.each(function(){
        $(that).slideDown('slow');
        $(that).find("#name").html(data.name); 
        $(that).find("#street1").html(data.street1); 
        $(that).find("#street2").html(data.street2); 
        $(that).find("#city").html(data.city); 
        $(that).find("#country").html(data.country); 
        $(that).find("#zipcode").html(data.zipcode); 
    });
};

$.fn.editAddress = function(json){
    var data = json;
    var that = this;
    return this.each(function(){
        $("#edit-dialog").dialog();
        $(that).find("#name").html(data.name); 
        $(that).find("#street1").html(data.street1); 
        $(that).find("#street2").html(data.street2); 
        $(that).find("#city").html(data.city); 
        $(that).find("#country").html(data.country); 
        $(that).find("#zipcode").html(data.zipcode); 
    });
};


