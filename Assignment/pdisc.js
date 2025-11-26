function Product(name,price){
	this.name=name
	this.price=price
}
Product.prototype.applyDiscount=function(percent){
	return this.price*(1-percent/100)
}
const a=new Product('A',100)
const b=new Product('B',200)
const c=new Product('C',50)
console.log(a.name,a.applyDiscount(10))
console.log(b.name,b.applyDiscount(25))
console.log(c.name,c.applyDiscount(5))
