function setupBookingForm(formId,ticketId){
  const form=document.getElementById(formId)
  const ticketEl=document.getElementById(ticketId)
  if(!form){
    console.log('booking: form not found',formId)
    return
  }
  console.log('booking: setup on',formId)
  function validName(v){return /^[A-Za-z ]+$/.test(v)}
  function validEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)}
  function validSeats(v){const n=Number(v);return Number.isInteger(n)&&n>=1&&n<=10}
  form.addEventListener('submit',e=>{
    e.preventDefault()
    console.log('booking: submit event')
    const name=form.querySelector('#name').value.trim()
    const email=form.querySelector('#email').value.trim()
    const seats=form.querySelector('#seats').value.trim()
    function setMessage(m){ if(ticketEl) ticketEl.textContent=m }
    if(!validName(name)){ setMessage('Invalid name'); return }
    if(!validEmail(email)){ setMessage('Invalid email'); return }
    if(!validSeats(seats)){ setMessage('Invalid seats'); return }
    const booking={name,email,seats:Number(seats)}
    if(ticketEl) ticketEl.textContent=JSON.stringify(booking)
    else console.log(booking)
  })
}
