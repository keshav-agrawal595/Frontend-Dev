const prodInput = document.getElementById('prodInput');
const addBtn = document.getElementById('addProd');
const list = document.getElementById('prodList');
let editingInput = null;

addBtn && addBtn.addEventListener('click', () => {
	if (!prodInput.value.trim()) return;
	const li = document.createElement('li');
	li.innerHTML = `
		<span class="text">${escapeHtml(prodInput.value)}</span>
		<button class="edit">Edit</button>
		<button class="del">Delete</button>
	`;
	list.appendChild(li);
	prodInput.value = '';
});

function escapeHtml(s) {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

list && list.addEventListener('click', (e) => {
	const t = e.target;
	if (t.classList.contains('del')) {
		const li = t.closest('li');
		li && li.remove();
	} else if (t.classList.contains('edit')) {
		const li = t.closest('li');
		if (!li) return;
		const span = li.querySelector('.text');
		const input = document.createElement('input');
		input.value = span.textContent;
		span.replaceWith(input);
		input.focus();
		editingInput = input;
		input.addEventListener('keydown', (ev) => {
			if (ev.key === 'Enter') finishEdit(input);
		});
	}
});

document.addEventListener('click', (e) => {
	if (editingInput && !editingInput.contains(e.target)) finishEdit(editingInput);
});

function finishEdit(input) {
	const span = document.createElement('span');
	span.className = 'text';
	span.textContent = input.value.trim();
	input.replaceWith(span);
	editingInput = null;
}