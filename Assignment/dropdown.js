const btn = document.getElementById('ddBtn');
const list = document.getElementById('ddList');

btn &&
	btn.addEventListener('click', (e) => {
		e.stopPropagation();
		list.style.display = list.style.display === 'block' ? 'none' : 'block';
	});

[...document.querySelectorAll('#ddList .opt')].forEach((o) => {
	o.addEventListener('click', (e) => {
		e.stopPropagation();
		btn.textContent = o.textContent;
		list.style.display = 'none';
	});
});

document.addEventListener(
	'click',
	() => {
		if (list) list.style.display = 'none';
	},
	true
);