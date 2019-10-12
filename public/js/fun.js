var funs={
    getHeader:function(callback){
        $.ajax({
            url:"header.html",
            type:"get",
            success: function(result) {
                callback(result);
            }
        })
    },
    getFooter:function(callback){
        $.ajax({
            url:"footer.html",
            type:"get",
            success: function(result) {
                callback(result);
            }
        })
    }
}