var button_1 = $("#anch1")
var button_2 = $("#anch2")
var button_3 = $("#anch3")
var button_4 = $("#anch4")




button_1.click(function(){
   $(".h21").css("display","block")
   $(".h22").css("display","none")
   $(".h23").css("display","none")
   $(".h24").css("display","none")
   $("#anch1").css("color","red")
   $("#anch2").css("color","white")
   $("#anch3").css("color","white")
   $("#anch4").css("color","white")
   
});
button_2.click(function(){
    $(".h21").css("display","none")
    $(".h22").css("display","block")
    $(".h23").css("display","none")
    $(".h24").css("display","none")
    $("#anch1").css("color","white")
    $("#anch3").css("color","white")
    $("#anch4").css("color","white")
    $("#anch2").css("color","red")
    
 });
button_3.click(function(){
   $(".h21").css("display","none")
   $(".h22").css("display","none")
   $(".h23").css("display","block")
   $(".h24").css("display","none")
   $("#anch1").css("color","white")
   $("#anch2").css("color","white")
   $("#anch3").css("color","red")
   $("#anch4").css("color","white")
});
button_4.click(function(){
   $(".h21").css("display","none")
   $(".h22").css("display","none")
   $(".h23").css("display","none")
   $(".h24").css("display","block")
   $("#anch1").css("color","white")
   $("#anch2").css("color","white")
   $("#anch3").css("color","white")
   $("#anch4").css("color","red")
});


function saveScrollPosition() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    localStorage.setItem('scrollPosition', scrollPosition);
  }

  window.onload = function () {
    const storedScrollPosition = localStorage.getItem('scrollPosition');
    if (storedScrollPosition) {
      window.scrollTo(0, storedScrollPosition);
      localStorage.removeItem('scrollPosition');
    }
  };

 