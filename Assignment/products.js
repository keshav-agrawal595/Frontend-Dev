async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    data.forEach(p => {
      console.log('Product:', p.title);
      console.log('Price: $' + p.price);
      console.log('Image:', p.image);
    });
  } catch (e) {
    console.log('Failed to load products. Please try again.');
  }
}
fetchProducts();
