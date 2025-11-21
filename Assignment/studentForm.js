function validateStudentForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const nameEl = form.querySelector('#name');
  const emailEl = form.querySelector('#email');
  const phoneEl = form.querySelector('#phone');
  const passwordEl = form.querySelector('#password');

  function setValidationState(el, isValid, message = '') {
    el.style.borderColor = isValid ? 'green' : 'red';
    let errorEl = document.getElementById(el.id + '-error');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.id = el.id + '-error';
      el.parentNode.appendChild(errorEl);
    }
    errorEl.style.color = isValid ? 'green' : 'red';
    errorEl.textContent = message;
  }

  function isValidName(value) {
    return /^[A-Za-z]+$/.test(value);
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    return /^\d{10}$/.test(value);
  }

  function isValidPassword(value) {
    return /(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}/.test(value);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const phone = phoneEl.value.trim();
    const password = passwordEl.value;

    setValidationState(nameEl, isValidName(name), isValidName(name) ? '' : 'Invalid name');
    setValidationState(emailEl, isValidEmail(email), isValidEmail(email) ? '' : 'Invalid email');
    setValidationState(phoneEl, isValidPhone(phone), isValidPhone(phone) ? '' : 'Invalid phone');
    setValidationState(passwordEl, isValidPassword(password), isValidPassword(password) ? '' : 'Invalid password');
  });
}
