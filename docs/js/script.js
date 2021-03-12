$(function(){
	$("ul.projects, .projects ul.news, p.about, p.blog, p.contact").css("display", "none");
});

$(function(){
	$("h2.projects a").click(function(){
			$("ul.projects:not(:animated)").slideToggle("show");
			return false;
	});
});
$(function(){
	$("h2.news a").click(function(){
			$("ul.news:not(:animated)").slideToggle("show");
			return false;
	});
});
$(function(){
	$("h2.about a").click(function(){
			$("p.about:not(:animated)").slideToggle("show");
			return false;
	});
});
$(function(){
	$("h2.blog a").click(function(){
			$("p.blog:not(:animated)").slideToggle("show");
			return false;
	});
});
$(function(){
	$("h2.contact a").click(function(){
			$("p.contact:not(:animated)").slideToggle("show");
			return false;
	});
});
