function setupStudentForm(formId){
  const form=document.getElementById(formId)
  if(!form) return
  const nameEl=form.querySelector('#name')
  const emailEl=form.querySelector('#email')
  const phoneEl=form.querySelector('#phone')
  const passwordEl=form.querySelector('#password')
  function setState(el,valid,message=''){
    el.style.borderColor=valid? 'green':'red'
    let msgEl=document.getElementById(el.id+'-error')
    if(!msgEl){
      msgEl=document.createElement('span')
      msgEl.id=el.id+'-error'
      el.parentNode.appendChild(msgEl)
    }
    msgEl.style.color=valid? 'green':'red'
    msgEl.textContent=message
  }
  function validName(v){return /^[A-Za-z]+$/.test(v)}
  function validEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)}
  function validPhone(v){return /^\d{10}$/.test(v)}
  function validPassword(v){return /(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{1,}$/.test(v)}
  form.addEventListener('submit',e=>{
    e.preventDefault()
    const n=nameEl.value.trim()
    const em=emailEl.value.trim()
    const ph=phoneEl.value.trim()
    const pw=passwordEl.value
    setState(nameEl,validName(n), validName(n)? '':'Invalid name')
    setState(emailEl,validEmail(em), validEmail(em)? '':'Invalid email')
    setState(phoneEl,validPhone(ph), validPhone(ph)? '':'Invalid phone')
    setState(passwordEl,validPassword(pw), validPassword(pw)? '':'Invalid password')
  })
}
