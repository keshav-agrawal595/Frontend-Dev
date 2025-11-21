const user={name:'John',email:'john@mail.com',age:21}

function setupUserUpdater(formId,displayId){
  const form=document.getElementById(formId)
  const display=document.getElementById(displayId)
  if(!form) return
  const nameEl=form.querySelector('#name')
  const emailEl=form.querySelector('#email')
  const ageEl=form.querySelector('#age')
  nameEl.value=user.name
  emailEl.value=user.email
  ageEl.value=user.age
  function render(){
    if(display) display.textContent=JSON.stringify(user)
  }
  form.addEventListener('submit',e=>{
    e.preventDefault()
    user.name=nameEl.value
    user.email=emailEl.value
    user.age=Number(ageEl.value)
    render()
  })
  render()
}
