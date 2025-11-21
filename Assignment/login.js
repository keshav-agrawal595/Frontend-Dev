function setupLoginForm(formId,messageId){
  const form=document.getElementById(formId)
  const messageEl=document.getElementById(messageId)
  if(!form) return
  function validUsername(v){return v.length>=5}
  function validPassword(v){return /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}/.test(v)}
  form.addEventListener('submit',e=>{
    e.preventDefault()
    const username=form.querySelector('#username').value
    const password=form.querySelector('#password').value
    if(!validUsername(username)){
      if(messageEl) messageEl.textContent='Username must be at least 5 characters'
      return
    }
    if(!validPassword(password)){
      if(messageEl) messageEl.textContent='Password must be at least 8 characters and include number, uppercase, lowercase, special character'
      return
    }
    if(messageEl) messageEl.textContent='Login successful'
  })
}
