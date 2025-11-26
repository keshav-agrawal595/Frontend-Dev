class Student{
	constructor(name,marks){
		this.name=name
		this.marks=marks
	}
	calculateAverage(){
		return this.marks.reduce((a,b)=>a+b,0)/this.marks.length
	}
	getGrade(){
		const avg=this.calculateAverage()
		return avg>=90?'A':avg>=75?'B':avg>=50?'C':'F'
	}
}
const s1=new Student('Alice',[95,88,92])
const s2=new Student('Bob',[70,75,72])
const s3=new Student('Carol',[45,52,48])
console.log(s1.name,s1.calculateAverage(),s1.getGrade())
console.log(s2.name,s2.calculateAverage(),s2.getGrade())
console.log(s3.name,s3.calculateAverage(),s3.getGrade())
