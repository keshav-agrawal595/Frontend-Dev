$(function(){
	$('#dept').on('click', '.manager', function(){
		$(this).next('.members').children().toggleClass('highlight');
	});
	$('#dept').on('mouseenter', '.emp', function(){ $(this).find('.info').show(); });
	$('#dept').on('mouseleave', '.emp', function(){ $(this).find('.info').hide(); });
	$('#rand').on('click', function(){
		const emp = $('#dept .emp').eq(Math.floor(Math.random()*$('#dept .emp').length));
		emp.siblings().addBack().toggleClass('highlight');
	});
	$('#togteam').on('click', function(){ $('#dept').find('.members').toggle(); });
	$('.info').hide();
});