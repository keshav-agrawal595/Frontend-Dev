const data=[{user:'A',steps:8000,calories:300},{user:'B',steps:12000,calories:500},{user:'C',steps:4000,calories:200}]
class FitnessAnalytics{
	constructor(d){if(!d||!d.length) throw new Error('Empty');this.d=d}
	getActiveUsers(){return this.d.filter(u=>u.steps>7000).map(u=>u.user)}
	getAverageCalories(){return this.d.reduce((s,u)=>s+u.calories,0)/this.d.length}
	getUserSummary(){return this.d.map(u=>`${u.user}: ${u.steps} steps, ${u.calories} cal`)}
}
const f=new FitnessAnalytics(data)
console.log(f.getActiveUsers())
console.log(f.getAverageCalories())
console.log(f.getUserSummary())
