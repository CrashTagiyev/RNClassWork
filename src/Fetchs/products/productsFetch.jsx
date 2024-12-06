export const getProducts = async () => {
  try {
    const response = await fetch('http://192.168.1.5:3000/api/products');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.products;
  } catch (err) {
    console.error('Error fetching products:', err.message);
  }
};
