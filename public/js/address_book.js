/*jslint white: false, onevar: false nomen: false browser: true */
/*global alert, window, AddressList, $ */

function action_links(data){
    var link = "<a href=\"view\">view</a> ";
    link += " | <a href=\"view\">edit</a>";
    link += " | <a href=\"view\">delete</a>";
    return link;
}

$(document).ready(function() {
    
    var address_list = new AddressList();
    
    address_list.show();
});