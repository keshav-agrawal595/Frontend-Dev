$(function(){
	$('#sub').on('click', function(){
		$('<div>Subscribed</div>').insertAfter('#topics').fadeIn().delay(800).fadeOut();
	});
	$('#unsub').on('click', function(){
		$('<div>Unsubscribed</div>').insertAfter('#topics').fadeIn().delay(800).fadeOut();
	});
	$('#add').on('click', function(){
		$('#topics').append('<li>NewTopic <button class="rem">Remove</button></li>');
	});
	$('#topics').on('click', '.rem', function(){ $(this).closest('li').remove(); });
	$('#topics').on('click', 'li', function(){
		$('<span style="color:green;"> Action done</span>').appendTo(this).fadeOut(1000);
	});
});