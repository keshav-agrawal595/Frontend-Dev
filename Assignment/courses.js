$(function(){
	$('#search').on('keyup', function(){
		const q = $(this).val().toLowerCase();
		let cnt = 0;
		$('#courses li').each(function(){
			const txt = $(this).text();
			if(q && txt.toLowerCase().includes(q)){
				$(this).show();
				$(this).html(txt.replace(new RegExp(q,'ig'), function(m){ return '<span class="match">'+m+'</span>'; }));
				cnt++;
			} else if(!q){
				$(this).show();
				$(this).text(txt);
			} else {
				$(this).hide();
			}
		});
		$('#count').text(cnt);
	});
	$('#clear').on('click', function(){ $('#search').val(''); $('#courses li').show(); $('#count').text('0'); });
});