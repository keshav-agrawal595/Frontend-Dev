const products=[
	{id:1,name:'A',category:'x',price:100,stock:2},
	{id:2,name:'B',category:'y',price:50,stock:0},
	{id:3,name:'C',category:'x',price:200,stock:5},
	{id:4,name:'D',category:'z',price:150,stock:1},
	{id:5,name:'E',category:'y',price:80,stock:10}
]
function getLowStockProducts(){
	return products.filter(p=>p.stock<3)
}
function sortProductsByPrice(){
	return [...products].sort((a,b)=>a.price-b.price)
}
function calculateTotalInventoryValue(){
	return products.reduce((s,p)=>s+p.price*p.stock,0)
}
function groupByCategory(){
	return products.reduce((acc,p)=>{(acc[p.category]=acc[p.category]||[]).push(p);return acc},{})
}
console.log(getLowStockProducts())
console.log(sortProductsByPrice())
console.log(calculateTotalInventoryValue())
console.log(groupByCategory())
