class FormBuilder{
  constructor(fields,containerId){
    this.fields=fields
    this.container=document.getElementById(containerId)
    this.submittedData=null
  }
  render(){
    if(!this.container) return
    let html = '<form id="' + this.container.id + '-form">'
    this.fields.forEach(f=>{
      const id=(f.name||f.label||f.type).replace(/\s+/g,'_')
      html+=`<label>${f.label||''}</label>`
      if(f.type==='textarea') html+=`<textarea id="${id}" name="${id}"></textarea>`
      else html+=`<input id="${id}" name="${id}" type="${f.type||'text'}">`
    })
    html+='<button type="submit">Submit</button></form>'
    this.container.innerHTML=html
    const form=document.getElementById(this.container.id+'-form')
    form.addEventListener('submit',e=>{
      e.preventDefault()
      const data={}
      this.fields.forEach(f=>{
        const id=(f.name||f.label||f.type).replace(/\s+/g,'_')
        const el=document.getElementById(id)
        data[id]=el?el.value:''
      })
      this.submittedData=data
    })
  }
  getFormData(){
    return this.submittedData
  }
}
