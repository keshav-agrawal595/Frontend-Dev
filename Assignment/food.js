const menu={Burger:100,Pizza:200,Salad:50,Soda:30,Fries:60}
function calculateBill(orderItems){
	const prices=orderItems.map(i=>{ if(!(i in menu)) throw new Error('Invalid item:'+i); return menu[i] })
	return prices.reduce((a,b)=>a+b,0)
}
try{
	console.log('Total',calculateBill(['Burger','Fries','Soda']))
	console.log('Total',calculateBill(['Pizza','IceCream']))
}catch(e){
	console.error('Order error:',e.message)
}
