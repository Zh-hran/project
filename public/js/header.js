$(function(){
    function callback(result){
        $(result).replaceAll("header");
        $(`<link rel="StyleSheet" href="CSS/header.css">`).appendTo("head");
        $(`<script src="js/head.js"></script>`).appendTo("body");
    }
    funs.getHeader(callback)
    
})