class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = +(this.price * (1 - percent / 100)).toFixed(2);
  }

  displayDetails() {
    return `${this.id} - ${this.name} (${this.category}): ${this.price}`;
  }
}

const products = [
  new Product(1, 'Laptop', 55000, 'Electronics'),
  new Product(2, 'Mouse', 800, 'Accessories'),
  new Product(3, 'Smartphone', 18000, 'Electronics'),
  new Product(4, 'Book', 500, 'Education'),
  new Product(5, 'Chair', 2500, 'Furniture')
];

const expensiveProducts = products.filter(p => p.price > 1000);
expensiveProducts.forEach(p => console.log(p.displayDetails()));
