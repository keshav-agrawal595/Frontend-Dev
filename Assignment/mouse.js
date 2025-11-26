const box = document.getElementById('box');
const coords = document.getElementById('coords');

box && box.addEventListener('mousemove', (e) => {
	coords && (coords.textContent = `${e.clientX}, ${e.clientY}`);
});

box && box.addEventListener('dblclick', (e) => {
	const dot = document.createElement('div');
	dot.style.position = 'absolute';
	dot.style.width = '8px';
	dot.style.height = '8px';
	dot.style.background = 'red';
	dot.style.borderRadius = '50%';
	const rect = box.getBoundingClientRect();
	dot.style.left = e.clientX - rect.left - 4 + 'px';
	dot.style.top = e.clientY - rect.top - 4 + 'px';
	box.appendChild(dot);
});