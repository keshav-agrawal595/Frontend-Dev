const form = document.getElementById('myForm');
const nameI = document.getElementById('name');
const emailI = document.getElementById('email');
const passI = document.getElementById('password');
const msg = document.getElementById('msg');

function setErr(el, text) {
	const s = el && el.nextElementSibling;
	if (s) s.textContent = text;
}

function clearErr(el) {
	const s = el && el.nextElementSibling;
	if (s) s.textContent = '';
}

form &&
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		let ok = true;
		if (!nameI.value.trim()) {
			setErr(nameI, 'Name required');
			ok = false;
		}
		if (!emailI.value.includes('@')) {
			setErr(emailI, 'Invalid email');
			ok = false;
		}
		if (passI.value.length < 6) {
			setErr(passI, 'Min 6 chars');
			ok = false;
		}
		if (ok && msg) msg.textContent = 'Form Submitted Successfully';
	});

[nameI, emailI, passI].forEach((i) => i && i.addEventListener('input', () => clearErr(i)));