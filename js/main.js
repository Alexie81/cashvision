console.log("Starting");
require('bootstrap');
window.$ = window.jQuery = require('jquery');
$(document).ready(function(){
    $("#btn").click(function(){
        alert("Bootstrap și jQuery funcționează!");
    });
});