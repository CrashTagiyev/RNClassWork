export const getProductById = async (id) => {
  try {
    const response = await fetch(`http://192.168.1.5:3000/api/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.product;
  } catch (err) {
    console.error('Error fetching products:', err.message);
  }
};
