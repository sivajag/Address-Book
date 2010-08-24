/*jslint white: false, onevar: false nomen: false browser: true */
/*global alert, window, AddressList, $ */

$(document).ready(function() {
    $("#address").hide();
    $("#address-list").showAddressList();

    $(".address-link").live("click",function(e){
        $.getJSON($(this).attr("href"), function(json) {
            $("#address").showAddress(json);
        });
        e.preventDefault();
    });

    $('#address-form').submit(function(event){
        event.preventDefault();
        var $this = $(this);
        var url = $this.attr('action');
        var dataToSend = $this.serialize();
        var callback = function(data){
            $("#address-list").addAddress(data);
        };
        var options = { 
            success:   callback,
            url: url,
            type:     "POST",
            dataType: "json",
            clearForm: true     
        }; 
        $(this).ajaxSubmit(options); 
    }); 

});