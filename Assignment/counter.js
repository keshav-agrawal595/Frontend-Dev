const ta = document.getElementById('textArea');
const cnt = document.getElementById('counter');
const reset = document.getElementById('resetBtn');
const MAX = 100;

ta && ta.addEventListener('input', () => {
	if (ta.value.length > MAX) ta.value = ta.value.slice(0, MAX);
	const rem = MAX - ta.value.length;
	cnt && (cnt.textContent = rem + ' chars left');
	if (cnt) cnt.style.color = rem <= 0 ? 'red' : rem <= 20 ? 'yellow' : '';
});

ta && ta.addEventListener('keydown', (e) => {
	if (
		ta.value.length >= MAX &&
		!['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)
	) e.preventDefault();
});

reset && reset.addEventListener('click', () => {
	ta.value = '';
	cnt && (cnt.textContent = MAX + ' chars left');
	if (cnt) cnt.style.color = '';
});