$(function(){
	setInterval(function(){
		var first = $('#carousel .slide:first');
		first.fadeOut(300,function(){ $(this).appendTo('#carousel').show(); });
	},2000);
	if(typeof jQ3 !== 'undefined'){
		jQ3(function(){
			jQ3('#widgets .w').first().addClass('active').css('border','2px solid blue');
			jQ3('#widgets').on('mouseenter','.w', function(){ jQ3(this).css('background','#eef'); });
			jQ3('#widgets').on('mouseleave','.w', function(){ jQ3(this).css('background',''); });
		});
	}
});