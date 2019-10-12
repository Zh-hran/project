$(function(){
    $(".wcol").on("click","P",function(){
        var $show=$(this).next()
        if($show.css("display")=="none"){
            $show.removeClass("m-hide");
            $show.parent().siblings().children("UL").addClass("m-hide")
        }else{
            $show.addClass("m-hide");
        }
    })
})