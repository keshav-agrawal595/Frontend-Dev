$(function() {
	const h = new Date().getHours();
	const text = h < 12 ? 'Good Morning' : h < 18 ? 'Good Afternoon' : 'Good Evening';
	$('#greeting').text(text);
	$('#chg').on('click', function() {
		$('#greeting').text('Keep going — small steps every day.');
	});
	$('#toggle').on('click', function() {
		$('#welcomeMsg').toggle();
	});
	$('#greeting').on('click', function() {
		alert($(this).text());
	});
});