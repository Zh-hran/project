$(function(){
    $(".san").click(function(){
        var $daohang=$(".daohang");
        //console.log($daohang.css("display")=="none")
        if($daohang.css("display")=="none"){
            $daohang.removeClass("m-hide");
        }else{
            $daohang.addClass("m-hide");
        }
    })
})