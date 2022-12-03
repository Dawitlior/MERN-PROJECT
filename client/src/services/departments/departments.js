export const getDepartments = async () => {
  try {
    const response = await fetch("http://localhost:8080/departments");
    const departments = await response.json();
    return departments;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
