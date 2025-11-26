const search = document.getElementById('search');
const tbody = document.querySelector('table tbody');
const noRow = document.createElement('tr');
noRow.innerHTML = `<td colspan="3">No results found</td>`;
let created = false;

search && search.addEventListener('input', () => {
	const q = search.value.trim().toLowerCase();
	const rows = tbody ? [...tbody.rows] : [];
	let found = false;
	rows.forEach((r) => {
		const text = (r.textContent || '').toLowerCase();
		const ok = text.includes(q);
		r.style.display = ok ? '' : 'none';
		if (ok) found = true;
	});
	if (!found) {
		if (tbody && !created) {
			tbody.appendChild(noRow);
			created = true;
		}
	} else if (created) {
		noRow.remove();
		created = false;
	}
});