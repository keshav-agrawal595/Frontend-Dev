$(function(){
	$('#hide').on('click', function(){ 
        $('#banners .ban').hide(); 
    });

	$('#show').on('click', function(){ 
        $('#banners .ban').show(); 
    });

	$('#slide').on('click', function(){ 
        $('#banners .ban').slideToggle(); 
    });

	$('#fade').on('click', function(){ 
        $('#banners .ban').fadeToggle(); 
    });
    
	setInterval(function(){
		const first = $('#banners .ban:first');
		first.fadeOut(400, function(){ $(this).appendTo('#banners').fadeIn(400); });
	}, 5000);
});