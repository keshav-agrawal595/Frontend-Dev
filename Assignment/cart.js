class Cart{
  constructor(){
    this.items=[]
  }
  addItem(name,price,quantity){
    this.items.push({name,price,quantity})
  }
  getTotal(){
    return this.items.reduce((sum,i)=>sum+i.price*i.quantity,0)
  }
  applyCoupon(code){
    const m=code.match(/^(SAVE|DISC)(\d{1,2})$/)
    if(!m) return null
    const pct=Number(m[2])
    const total=this.getTotal()
    return +(total*(1-pct/100)).toFixed(2)
  }
}

const cart=new Cart()
cart.addItem('Pen',10,3)
cart.addItem('Bag',1200,1)
console.log(cart.getTotal())
console.log(cart.applyCoupon('SAVE20'))
