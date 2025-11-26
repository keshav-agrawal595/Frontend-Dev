$(function(){
	$('#faq').on('click', '.q', function(){ $(this).next('.a').slideToggle(); });
	$('#faq').on('mouseenter', '.q', function(){ $(this).css('color','blue'); });
	$('#faq').on('mouseleave', '.q', function(){ $(this).css('color',''); });
	$('#faq').on('dblclick', '.q', function(){ $('.a').slideUp(); });
	$('.qa:first .a').append('<input class="ansinp">');
	$('#faq').on('focus', '.ansinp', function(){ $(this).closest('.qa').find('.q').css('background','#fffae6'); });
	$('#faq').on('blur', '.ansinp', function(){ $(this).closest('.qa').find('.q').css('background',''); });
});