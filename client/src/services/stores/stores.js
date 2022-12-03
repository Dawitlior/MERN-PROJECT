export const getStores = async () => {
  try {
    const response = await fetch("http://localhost:8080/stores");
    const stores = await response.json();
    return stores;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
