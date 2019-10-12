$(function(){
    function callback(result){
        $(result).replaceAll("footer");
        $(`<link rel="StyleSheet" href="CSS/footer.css">`).appendTo("head");
    }
    funs.getFooter(callback)
})