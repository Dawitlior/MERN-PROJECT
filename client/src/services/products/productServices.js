export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:8080/products")
    const products = response.json();
    return products
  } catch (err) {
    console.log(err);
  } finally {
  }
};
