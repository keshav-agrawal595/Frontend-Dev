$(function(){
	const existing = ['a@x.com','b@y.com'];
	$('#frm').on('submit', function(e){
		e.preventDefault();
		let ok = true;
		const name = $('#name').val().trim();
		const email = $('#email').val().trim();
		const pass = $('#pass').val();
		$('#frm input').removeClass('err');
		if(!name){ $('#name').addClass('err'); ok=false; }
		if(!email || !/@/.test(email) || existing.includes(email)){ $('#email').addClass('err'); ok=false; }
		if(!pass || pass.length<8){ $('#pass').addClass('err'); ok=false; }
		if(ok){ $('#msg').text('Success'); } else { $('#msg').text('Fix errors'); }
	});
	$('#frm input').on('input', function(){ $(this).removeClass('err'); $('#msg').text(''); });
});