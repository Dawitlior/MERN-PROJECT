export const getInformationPages = async () => {
  try {
    const response = await fetch("http://localhost:8080/informationPages")
    const informationPage = await response.json();
    return informationPage
  } catch (error) {
    console.log(error);
  } finally {
  }
};

