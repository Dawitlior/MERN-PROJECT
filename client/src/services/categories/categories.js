export const getCategories = async () => {
  try {
    const response = await fetch("http://localhost:8080/categories");
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
