$(document).ready(function(){
	var c=false;
	//var f=$(".team-bio").text();
	$(".slide").css("opacity",1);
	$(".main").onepage_scroll({sectionContainer:"section"});
	$(".portfolio-item-overlay").css("opacity",0);
	$("#Grid").mixitup();function a(){
		var g={center:new google.maps.LatLng(51.511214,-0.119824),zoom:12,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:false};
		var h=new google.maps.Map(document.getElementById("map-canvas"),g);
	}google.maps.event.addDomListener(window,"load",a);
	$("#cbp-qtrotator").cbpQTRotator();
	var b=new $.BigVideo({useFlashForFirefox:false});b.init();
	/*if(Modernizr.touch){b.show("img/background1.jpg");}
	else{b.show("video/timelapse.mp4",{ambient:true,doLoop:true,altSource:"video/timelapse.ogv"});} */
	setTimeout(function(){ 
		$("#big-video-wrap").show().animate({opacity:1});
	},4500); 
	$(".team-image-container").children("div").css("opacity",0);
	$(".bio-alt-text").css("opacity",0);
	$(".portfolio-item-overlay").on("click",function(){
		var h=$(this).next().data("title"),i=$(this).next().data("copy"),g=$(this).next().find("img").eq(0).attr("src");
		$(".modal-title").text(h);
		$(".modal-body").children("p").text(i);
		$(".modal-body").children("img").attr("src",g);
		$("#work-modal").modal("show");
	});
	$(".portfolio-item-overlay").mouseenter(function(){
		$(this).stop().animate({opacity:0.7},500);
	}).mouseleave(function(){
		$(this).stop().animate({opacity:0},500);
	});
	for(var d=0;d<=8;d++){
		var e=(2674*d)*0.8;
		$("#carousel-work-"+d).carousel({interval:e
		});
	}$(".team-image-container").mouseenter(function(){
		$(this).children("div").stop().animate({opacity:1},500);
		var g=$(this).children("div").data("bio");
		$(".bio-text").addClass("hide").stop().animate({opacity:0},500);
		$(".bio-alt-text").text(g).removeClass("hide").stop().animate({opacity:1},500);}).mouseleave(function(){
			$(this).children("div").stop().animate({opacity:0},500);
			$(".bio-text").removeClass("hide").stop().animate({opacity:1},500);
			$(".bio-alt-text").addClass("hide").stop().animate({opacity:0},500);
		});
		$(".location-scroll").on("click",function(g){
			g.preventDefault();
			$(".onepage-pagination li:nth-child(5)").children().trigger("click");
		});
		$(".client-scroll").on("click",function(g){
			g.preventDefault();
			$(".onepage-pagination li:nth-child(4)").children().trigger("click");
		});
		$(".onepage-pagination").addClass("animated fadeInUp delay-2");
		$(".onepage-pagination").children().each(function(){
			switch($(this).children().data("index"))
			{case 1:
				$(this).children().append("<i class='entypo-home'></i>");break;case 2:
				$(this).children().append("<i class='entypo-users'></i>");break;case 3:
				$(this).children().append("<i class='entypo-book'></i>");break;case 4:
				$(this).children().append("<i class='entypo-heart'></i>");break;case 5:
				$(this).children().append("<i class='entypo-mail'></i>");break;
			}
		});
		$(".settings-icon").on("click",function(){$(this).parent().toggleClass("open");
	});
		$(".toggle-video").on("click",function(){$("#big-video-wrap").toggleClass("hide-video");
	});
});