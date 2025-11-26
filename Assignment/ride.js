class User{
	constructor(name,rating){
		this.name=name
		this.rating=rating
	}
}
class Driver extends User{
	constructor(name,rating,vehicle){
		super(name,rating)
		this.vehicle=vehicle
	}
}
class Trip{
	constructor(from,to,distance){
		this.from=from
		this.to=to
		this.distance=distance
	}
	calculateFare(){
		if(typeof this.distance!=='number' || this.distance<0) throw new Error('Invalid distance')
		return this.distance*10
	}
}
try{
	const t=new Trip('A','B',12)
	console.log('Fare',t.calculateFare())
	const t2=new Trip('C','D',-5)
	console.log('Fare',t2.calculateFare())
}catch(e){
	console.error('Trip error:',e.message)
}
