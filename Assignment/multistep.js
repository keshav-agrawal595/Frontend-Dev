const steps = [...document.querySelectorAll('.step')];
const nextBtns = [...document.querySelectorAll('.next')];
const backBtns = [...document.querySelectorAll('.back')];
const summary = document.getElementById('summary');
let idx = 0;

function show() {
	steps.forEach((s, i) => (s.style.display = i === idx ? 'block' : 'none'));
}

show();

nextBtns.forEach((btn) =>
	btn.addEventListener('click', () => {
		const cur = steps[idx];
		const input = cur && cur.querySelector('input');
		const v = input ? input.value.trim() : '';
		if (idx === 0 && !v) return;
		if (idx === 1 && !v.includes('@')) return;
		if (idx === 2 && v.length < 6) return;
		if (idx < steps.length - 1) {
			idx++;
			show();
		} else {
			const name = document.querySelector('#step1 input').value || '';
			const email = document.querySelector('#step2 input').value || '';
			const pass = document.querySelector('#step3 input').value || '';
			summary && (summary.textContent = `Name: ${name} | Email: ${email} | Password: ${'*'.repeat(pass.length)}`);
		}
	})
);

backBtns.forEach((btn) => btn.addEventListener('click', () => {
	idx = Math.max(0, idx - 1);
	show();
}));