window.onload = function() {
	var div1 = document.getElementById("div1");
	var ul1 = document.getElementById("ul1");
	var ali = ul1.getElementsByTagName("li");
	var speed = 2;
	ul1.innerHTML = ul1.innerHTML + ul1.innerHTML;
	ul1.style.width = ali[1].offsetWidth * ali.length + 160 + "px";

	function move() {
		if(ul1.offsetLeft < -ul1.offsetWidth / 2) {
			ul1.style.left = 0;
		}
		if(ul1.offsetLeft > 0) {
			ul1.style.left = -ul1.offsetWidth / 2 + "px";
		}
		ul1.style.left = ul1.offsetLeft + speed + "px";
	}
	var timer = setInterval(move, 30);
	div1.onmouseover = function() {
		clearInterval(timer);
	};
	div1.onmouseout = function() {
		timer = setInterval(move, 30);
	};

	document.getElementsByClassName("left-to")[0].onclick = function() {
		speed = -2;
		document.getElementsByClassName("icon-slide-left")[0].style.color = "#5BB531";
		var timer1 = window.setInterval(function() {
			document.getElementsByClassName("icon-slide-left")[0].style.color = "white";
		}, 300);

	};
	document.getElementsByClassName("right-to")[0].onclick = function() {
		speed = 2;
		document.getElementsByClassName("icon-slide-right")[0].style.color = "#5BB531";
		var timer2 = window.setInterval(function() {
			document.getElementsByClassName("icon-slide-right")[0].style.color = "white";
		}, 300);
	};

};
//设为首页；收藏网站


function SetHome(url) {
	if(document.all) {
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(url);
	} else {

		alert("您好,设定失败了，请您手动在浏览器的设置中设定首页!");
	}
}

//function AddFavorite(title, url) {
//	try {
//		window.external.addFavorite(url, title);
//	} catch(e) {
//		try {
//			window.sidebar.addPanel(title, url, "");
//		} 
//		catch(e) {
//			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
//		}
//	}

function AddFavorite() {
	var sTitle = document.title;
	var sURL = window.location;
	if(window.sidebar) return true;
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch(e) {
		alert("收藏失败了哦 ，请按键盘上ctrl和D两个键快捷添加");
	}
	return false;
}


$(document).ready(function() {

	var cli = $(".success-case-list").children("li").length;
	for(var j = 0; j < cli; j++) {
		if(j == 2 || j == 5) {
			$(".success-case-list li").eq(j).css({
				"margin-right": "0px"
			});
		}

	}
	var comli = $(".company-pic").children("li").length;
	for(var x = 0; x < comli; x++) {
		if(x == 2) {
			$(".company-pic li").eq(x).css({
				"margin-right": "0px"
			});
		}

	}
	//首页导航栏切换
	$(".top_nav li").click(function() {
		var l = $(".top_nav").children("li").length;
		var x = $(this).index();
		if(x == 6) {
			for(var j = 0; j < l; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(0).show();
			}
		}
		if(x == 5) {
			for(var j = 0; j < l; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(1).show();
			}
		}
		if(x == 4) {
			for(var j = 0; j < l; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(2).show();
			}
		}
		if(x == 3) {
			for(var j = 0; j < l; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(3).show();
			}
		}
		if(x == 2) {
			for(var j = 0; j < l; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(4).show();
			}
		}
		if(x == 1) {
			for(var j = 0; j < l; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(5).show();
			}
		}
		if(x == 0) {
			for(var j = 0; j < l; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(6).show();
			}
		}
		for(var i = 0; i < l; i++) {
			//					if(i == 0) {
			//						continue;
			//					}
			$(".top_nav li").eq(i).removeClass("active")
			$(".top_nav li").eq(i).addClass("default");

		}
		$(this).addClass("active");
		//		var x = $(this).index();
		//		alert(x);

	});
});

//解决方案
$(document).ready(function() {

	$(".solution-nav div").click(function() {
		var l = $(".solution-nav").children("div").length;
		var x = $(this).index();
		if(x == 4) {
			for(var j = 0; j < l; j++) {
				$(".solution-list .solution").eq(j).hide();
				$(".solution-list .solution").eq(4).show();
			}
		}
		if(x == 3) {
			for(var j = 0; j < l; j++) {
				$(".solution-list .solution").eq(j).hide();
				$(".solution-list .solution").eq(3).show();
			}
		}
		if(x == 2) {
			for(var j = 0; j < l; j++) {
				$(".solution-list .solution").eq(j).hide();
				$(".solution-list .solution").eq(2).show();
			}
		}
		if(x == 1) {
			for(var j = 0; j < l; j++) {
				$(".solution-list .solution").eq(j).hide();
				$(".solution-list .solution").eq(1).show();
			}
		}
		if(x == 0) {
			for(var j = 0; j < l; j++) {
				$(".solution-list .solution").eq(j).hide();
				$(".solution-list .solution").eq(0).show();
			}
		}

		var l = $(".solution-nav").children("div").length;
		for(var i = 0; i < l; i++) {
			$(".solution-nav div").eq(i).removeClass("other-active");
			$(".solution-nav div").eq(i).addClass("other-default");

		}
		$(this).addClass("other-active");
		var y = $(".solution-nav div").eq(x).text();
		$(".solution-for li").eq(0).html(y);

	});
})

//产品中心
$(document).ready(function() {
	$(".product-for div").click(function() {
		var l = $(".product-for").children("div").length;
		var x = $(this).index();
		if(x == 1) {
			for(var j = 0; j < l; j++) {
				$(".product-for-show .ware").eq(j).hide();

			}
			$(".product-for-show .ware").eq(1).show();

		}
		if(x == 0) {
			for(var j = 0; j < l; j++) {

				$(".product-for-show .ware").eq(j).hide();

			}
			$(".product-for-show .ware").eq(0).show();

		}

		var l = $(".product-for").children("div").length;
		for(var i = 0; i < l; i++) {
			$(".product-for div ").eq(i).removeClass("other-active");
			$(".product-for div ").eq(i).addClass("other-default");

		}
		$(this).addClass("other-active");
		var y = $(".product-for div").eq(x).text();
		$(".for-product li").eq(0).html(y);

	});
})

//技术服务
$(document).ready(function() {

	$(".software-for-jquery div").click(function() {
		var l = $(".software-for-jquery").children("div").length;
		var x = $(this).index();
		if(x == 4) {
			for(var j = 0; j < l; j++) {
				$(".service-list .technology-service").eq(j).hide();
				$(".service-list .technology-service").eq(4).show();
			}
		}
		if(x == 3) {
			for(var j = 0; j < l; j++) {
				$(".service-list .technology-service").eq(j).hide();
				$(".service-list .technology-service").eq(3).show();
			}
		}
		if(x == 2) {
			for(var j = 0; j < l; j++) {
				$(".service-list .technology-service").eq(j).hide();
				$(".service-list .technology-service").eq(2).show();
			}
		}
		if(x == 1) {
			for(var j = 0; j < l; j++) {
				$(".service-list .technology-service").eq(j).hide();
				$(".service-list .technology-service").eq(1).show();
			}
		}
		if(x == 0) {
			for(var j = 0; j < l; j++) {
				$(".service-list .technology-service").eq(j).hide();
				$(".service-list .technology-service").eq(0).show();
			}
		}

		var l = $(".software-for-jquery").children("div").length;
		for(var i = 0; i < l; i++) {
			$(".software-for-jquery div").eq(i).removeClass("other-active");
			$(".software-for-jquery div").eq(i).addClass("other-default");

		}
		$(this).addClass("other-active");
		var y = $(".software-for-jquery div").eq(x).text();
		$(".for-service li").eq(0).html(y);
	});
})


//成功案例

//$(document).ready(function() {
//
//	$(".case-nav div").click(function() {
//		var l = $(".case-nav").children("div").length;
//		var x = $(this).index();
//		if(x == 4) {
//			for(var j = 0; j < l; j++) {
//				$(".service-list .technology-service").eq(j).hide();
//				$(".service-list .technology-service").eq(4).show();
//			}
//		}
//		if(x == 3) {
//			for(var j = 0; j < l; j++) {
//				$(".service-list .technology-service").eq(j).hide();
//				$(".service-list .technology-service").eq(3).show();
//			}
//		}
//		if(x == 2) {
//			for(var j = 0; j < l; j++) {
//				$(".service-list .technology-service").eq(j).hide();
//				$(".service-list .technology-service").eq(2).show();
//			}
//		}
//		if(x == 1) {
//			for(var j = 0; j < l; j++) {
//				$(".service-list .technology-service").eq(j).hide();
//				$(".service-list .technology-service").eq(1).show();
//			}
//		}
//		if(x == 0) {
//			for(var j = 0; j < l; j++) {
//				$(".service-list .technology-service").eq(j).hide();
//				$(".service-list .technology-service").eq(0).show();
//			}
//		}
//
//		var l = $(".software-for-jquery").children("div").length;
//		for(var i = 0; i < l; i++) {
//			$(".software-for-jquery div").eq(i).removeClass("other-active");
//			$(".software-for-jquery div").eq(i).addClass("other-default");
//
//		}
//		$(this).addClass("other-active");
//		var y = $(".software-for-jquery div").eq(x).text();
//		$(".for-service li").eq(0).html(y);
//	});
//})
//关于我们
$(document).ready(function() {

	$(".company-nav div").click(function() {
		var l = $(".company-nav").children("div").length;
		var x = $(this).index();
		if(x == 2) {
			for(var j = 0; j < l; j++) {
				$(".company-for .company").eq(j).hide();
				$(".company-for .company").eq(2).show();
			}
		}
		if(x == 1) {
			for(var j = 0; j < l; j++) {
				$(".company-for .company").eq(j).hide();
				$(".company-for .company").eq(1).show();
			}
		}
		if(x == 0) {
			for(var j = 0; j < l; j++) {
				$(".company-for .company").eq(j).hide();
				$(".company-for .company").eq(0).show();
			}
		}

		var l = $(".company-nav").children("div").length;
		for(var i = 0; i < l; i++) {
			$(".company-nav div").eq(i).removeClass("other-active");
			$(".company-nav div").eq(i).addClass("other-default");

		}
		$(this).addClass("other-active");
		var y = $(".company-nav div").eq(x).text();
		$(".for-company li").eq(0).html(y);

	});
})
//友情链接
$(document).ready(function() {
	$(".friendship-link li").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 10); //回到顶端

		var z = $("#friendship-link").children("li").length;
		var x = $(this).index();
		if(x == 0) {
			for(var i = 0; i < 7; i++) {
				$(".top_nav li").eq(i).removeClass("active");
				$(".top_nav li").eq(i).addClass("default");

			}
			$(".top_nav li").eq(6).addClass("active");
			for(var j = 0; j <= z; j++) {

				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(0).show();
			}
		}
		if(x == 1) {
			for(var i = 0; i < 7; i++) {
				$(".top_nav li").eq(i).removeClass("active");
				$(".top_nav li").eq(i).addClass("default");

			}
			$(".top_nav li").eq(5).addClass("active");
			for(var j = 0; j <= z; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(1).show();
			}
		}
		if(x == 2) {
			for(var i = 0; i < 7; i++) {
				$(".top_nav li").eq(i).removeClass("active");
				$(".top_nav li").eq(i).addClass("default");

			}
			$(".top_nav li").eq(4).addClass("active");
			for(var j = 0; j <= z; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(2).show();
			}
		}
		if(x == 3) {
			for(var i = 0; i < 7; i++) {
				$(".top_nav li").eq(i).removeClass("active");
				$(".top_nav li").eq(i).addClass("default");

			}
			$(".top_nav li").eq(3).addClass("active");
			for(var j = 0; j <= z; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(3).show();
			}
		}
		if(x == 4) {
			for(var i = 0; i < 7; i++) {
				$(".top_nav li").eq(i).removeClass("active");
				$(".top_nav li").eq(i).addClass("default");

			}
			$(".top_nav li").eq(2).addClass("active");
			for(var j = 0; j <= z; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(4).show();
			}
		}
		if(x == 5) {
			for(var i = 0; i < 7; i++) {
				$(".top_nav li").eq(i).removeClass("active");
				$(".top_nav li").eq(i).addClass("default");

			}
			$(".top_nav li").eq(0).addClass("active");
			for(var j = 0; j <= z; j++) {
				$(".comtent-wrapper .comtent").eq(j).hide();
				$(".comtent-wrapper .comtent").eq(6).show();
			}
		}
		return false;

	});
})

//显示产品详情
$(document).ready(function() {
	$(".product-list-for-software li").click(function() {
		$(".product-list-for-software").hide();
		var l = $(".product-list-for-software").children("li").length;
		var x = $(this).index();
		if(x == 0) {
			for(var j = 0; j < l; j++) {
				$(".product-detail-messege .messege-detail").eq(j).hide();

			}

			$(".product-detail-messege .messege-detail").eq(0).fadeIn("slow");
			$(".soft-back-to").eq(0).fadeIn("slow");
		}
		if(x == 1) {
			for(var j = 0; j < l; j++) {
				$(".product-detail-messeger .messege-detail").eq(j).hide();

			}

			$(".product-detail-messege .messege-detail").eq(1).fadeIn("slow");
			$(".soft-back-to").eq(0).fadeIn("slow");

		}
		if(x == 2) {
			for(var j = 0; j < l; j++) {
				$(".product-detail-messege .messege-detail").eq(j).hide();

			}

			$(".product-detail-messege .messege-detail").eq(2).fadeIn("slow");
			$(".soft-back-to").eq(0).fadeIn("slow");
		}
	});

	$(".product-list-for-hardware li").click(function() {
		$(".product-list-for-hardware").hide();
		var le = $(".product-list-for-hardware").children("li").length;
		var y = $(this).index();

		if(y == 0) {
			for(var j = 0; j < le; j++) {
				$(".hard-product-detail-messege .hard-messege-detail").eq(j).hide();

			}
			$(".hard-messege-detail").eq(0).fadeIn("slow");
			$(".hard-back-to").eq(0).fadeIn("slow");
		}
		if(y == 1) {
			for(var j = 0; j < le; j++) {
				$(".hard-messege-detail").eq(j).hide();

			}
			$(".hard-messege-detail").eq(1).fadeIn("slow");
			$(".hard-back-to").eq(0).fadeIn("slow");

		}
	});

	$(".hard-back-to").click(function() {
		$(".hard-back-to").eq(0).hide();
		$(".product-list-for-hardware").fadeIn("slow");
		var l = $(".product-list-for-hardware").children("li").length;
		for(var j = 0; j < l; j++) {
			$(".hard-messege-detail").eq(j).hide();

		}

	})

	$(".soft-back-to").click(function() {
		$(".soft-back-to").eq(0).hide();
		$(".product-list-for-software").fadeIn("slow");
		var l = $(".product-list-for-software").children("li").length;
		for(var j = 0; j < l; j++) {
			$(".product-detail-messege .messege-detail").eq(j).hide();

		}

	})
});

//显示案例详情

$(document).ready(function() {
	$(".get-detail li").click(function() {
		//		$("html,body").animate({
		//			scrollTop: 0px
		//		}, 10); //回到顶端
		$(".get-detail").hide();
		var l = $(".get-detail").children("li").length;
		var x = $(this).index();
		if(x == 1) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}

			$(".case-detail-messege li").eq(0).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");
		}
		if(x == 2) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}

			$(".case-detail-messege li").eq(1).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");

		}
		if(x == 3) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}

			$(".case-detail-messege li").eq(2).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");
		}
		if(x == 4) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}

			$(".case-detail-messege li").eq(3).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");
		}
		if(x == 5) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}
			$(".case-detail-messege li").eq(4).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");
		}
		if(x == 6) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}

			$(".case-detail-messege li").eq(5).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");
		}

	});

	$(".back-to").click(function() {
		$(".back-to").eq(0).hide();
		$(".get-detail").fadeIn("slow");
		var l = $(".get-detail").children("li").length;
		for(var j = 0; j < l; j++) {
			$(".case-detail-messege li").eq(j).hide();

		}

	})
});

//显示home案例详情

$(document).ready(function() {
	$(".success-case-list li").click(function() {
		//		$("html,body").animate({
		//			scrollTop: 0px
		//		}, 10); //回到顶端
		$(".comtent1-uni").hide();
		$(".comtent5-case").show();
		$(".get-detail").hide();
		var l = $(".success-case-list").children("li").length;
		var x = $(this).index();
		if(x == 0) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}
			$(".case-detail-messege li").eq(0).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");
		}
		if(x == 1) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}

			$(".case-detail-messege li").eq(1).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");

		}
		if(x == 2) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}

			$(".case-detail-messege li").eq(2).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");
		}
		if(x == 3) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}

			$(".case-detail-messege li").eq(3).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");
		}
		if(x == 4) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}
			$(".case-detail-messege li").eq(4).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");
		}
		if(x == 5) {
			for(var j = 0; j < l; j++) {
				$(".case-detail-messege li").eq(j).hide();

			}

			$(".case-detail-messege li").eq(5).fadeIn("slow");
			$(".back-to").eq(0).fadeIn("slow");
		}

	});

	$(".back-to").click(function() {
		$(".back-to").eq(0).hide();
		$(".get-detail").fadeIn("slow");
		var l = $(".get-detail").children("li").length;
		for(var j = 0; j < l; j++) {
			$(".case-detail-messege li").eq(j).hide();

		}

	})
});

//显示解决方案详情
$(document).ready(function() {
	$(".solution-project-detail li").click(function() {
		//		$("html,body").animate({
		//			scrollTop: 0px
		//		}, 10); //回到顶端
		$(".comtent1-uni").hide();
		$(".comtent2-solution").show();
		//		$(".get-detail").hide();
		var l = $(".solution-project-detail").children("li").length;
		var sluNavL = $(".solution-nav").children("div").length;
		var x = $(this).index();
		if(x == 0) {
			for(var j = 0; j < l; j++) {
				$(".solution-list li").eq(j).hide();
				$(".solution-nav div").eq(j).removeClass("other-active");
				$(".solution-nav div").eq(j).addClass("other-default");
			}

			$(".solution-nav div").eq(x).addClass("other-active");
			var y = $(".solution-nav div").eq(x).text();
			$(".solution-for li").eq(0).html(y);
			$(".solution-list li").eq(0).fadeIn("slow");

		}
		if(x == 1) {
			for(var j = 0; j < l; j++) {
				$(".solution-list li").eq(j).hide();
				$(".solution-nav div").eq(j).removeClass("other-active");
				$(".solution-nav div").eq(j).addClass("other-default");
			}

			$(".solution-nav div").eq(x).addClass("other-active");
			var y = $(".solution-nav div").eq(x).text();
			$(".solution-for li").eq(0).html(y);
			$(".solution-list li").eq(1).fadeIn("slow");

		}
		if(x == 2) {
			for(var j = 0; j < l; j++) {
				$(".solution-list li").eq(j).hide();
				$(".solution-nav div").eq(j).removeClass("other-active");
				$(".solution-nav div").eq(j).addClass("other-default");
			}

			$(".solution-nav div").eq(x).addClass("other-active");
			var y = $(".solution-nav div").eq(x).text();
			$(".solution-for li").eq(0).html(y);
			$(".solution-list li").eq(2).fadeIn("slow");

		}
		if(x == 3) {
			for(var j = 0; j < l; j++) {
				$(".solution-list li").eq(j).hide();
				$(".solution-nav div").eq(j).removeClass("other-active");
				$(".solution-nav div").eq(j).addClass("other-default");
			}

			$(".solution-nav div").eq(x).addClass("other-active");
			var y = $(".solution-nav div").eq(x).text();
			$(".solution-for li").eq(0).html(y);
			$(".solution-list li").eq(3).fadeIn("slow");

		}
		if(x == 4) {
			for(var j = 0; j < l; j++) {
				$(".solution-list li").eq(j).hide();
				$(".solution-nav div").eq(j).removeClass("other-active");
				$(".solution-nav div").eq(j).addClass("other-default");
			}

			$(".solution-nav div").eq(x).addClass("other-active");
			var y = $(".solution-nav div").eq(x).text();
			$(".solution-for li").eq(0).html(y);
			$(".solution-list li").eq(4).fadeIn("slow");
		}

	});
});