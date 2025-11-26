$(function() {
	$('#list li[data-discount="true"]').addClass('discount');
	$('#list').on('click', 'li', function() {
		if ($(this).data('stock') === 0) {
			alert('Out of stock');
			return;
		}
		$(this).toggleClass('highlight');
	});
	$('#list').on('mouseenter', 'li', function() { $(this).find('.det').show(); });
	$('#list').on('mouseleave', 'li', function() { $(this).find('.det').hide(); });
	$('#list').on('click', '.favBtn', function(e) { e.stopPropagation(); $(this).toggleClass('fav'); });
	$('.det').hide();
});