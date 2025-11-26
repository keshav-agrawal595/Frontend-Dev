class BankAccount{
	#balance
	constructor(b=0){this.#balance=b}
	deposit(a){this.#balance+=a}
	withdraw(a){if(a>this.#balance) throw new Error('Insufficient'); this.#balance-=a}
	getBalance(){return this.#balance}
}
const acc=new BankAccount(100)
acc.deposit(50)
console.log('Balance',acc.getBalance())
try{acc.withdraw(200)}catch(e){console.error('Withdraw error:',e.message)}
acc.withdraw(50)
console.log('Balance',acc.getBalance())
