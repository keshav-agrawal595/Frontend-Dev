class Employee{
  constructor(id,name,department,salary){
    this.id=id
    this.name=name
    this.department=department
    this.salary=salary
  }
  getAnnualSalary(){
    return this.salary*12
  }
  applyBonus(percent){
    this.salary=this.salary*(1+percent/100)
  }
}

const employees=[
  new Employee(1,'Alice','HR',3000),
  new Employee(2,'Bob','Dev',5000),
  new Employee(3,'Carol','Sales',3500),
  new Employee(4,'Dave','DevOps',4500),
  new Employee(5,'Eve','QA',3200)
]

employees.forEach(e=>console.log(e.id,e.getAnnualSalary()))

const totalAnnualPayout=employees.reduce((sum,e)=>sum+e.getAnnualSalary(),0)
console.log(totalAnnualPayout)
