$(document).ready(function () {

	 $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
	$(".txtb").on("keyup" , function(e){
		if(e.keyCode == 13 && $(".txtb").val() !=""){

		var task = $("<div class='task'></div>").text($(".txtb").val());
		var imp = $("<i class='fa fa-thumb-tack'></i>").clickToggle(function(){
			var p =$(this).parent();
			p.css("background" , "red");

			$(this).css("transform", "rotate(92deg)");
			$(this).css("transition","0.5s");
		},
		function(){

			var p =$(this).parent();
			p.css("background" , "rgba(255,255,255,0.5)");

			$(this).css("transform", "rotate(0deg)");
			$(this).css("transition","0.5s");

		});

		// var imp = $("<i class='fa fa-thumb-tack'></i>").toggle(
  // 		function(){$(this).css({"color": "red"});},
  // 		function(){$(this).css({"color": "blue"});},
  // 		function(){$().css({"color": "green"});
		// });
		var scretch = $("<i class='fa fa-paint-brush'></i>").click(function(){
				var p =$(this).parent();
				p.each(function(index) {
     			var back = ["#FBF700",'#00861d','#1000ff'];
      			var rand = back[Math.floor(Math.random() * back.length)];
      // $('div').css('background',rand);
      // var colorR = Math.floor((Math.random() * 256));
      // var colorG = Math.floor((Math.random() * 256));
      // var colorB = Math.floor((Math.random() * 256));
     			 $(this).css("color", rand);
		
		});
				   });
		var del = $("<i class='fa fa-trash'></i>").click(function(){

			var p =$(this).parent();
			p.fadeOut();
			p.remove();
		});
		var check =$("<i class='fa fa-check''></i>").click(function(){
			var p=$(this).parent();
			var p1 =$(this).parent().find(".fa-paint-brush");
			var p2 =$(this).parent().find(".fa-thumb-tack");
			
			p.fadeOut(function(){

				$(".comp1").append(p);
				p.fadeIn();
				p.css("background" , "rgba(0,0,0,0.5)");
				p.css("color","#ffffff");
			});
			$(this).remove();
			p1.remove();
			p2.remove();




		});


		task.append(del,check,scretch,imp);	
		$(".notcomp1").append(task);
		$(".txtb").val("");
	}
	});
	$(function(){
	$(".sortable").sortable();
	$( ".sortable" ).disableSelection();
});
});