const fetchData = async (url ,Option = {}) => {
    try {
        const response = await fetch(url, Option);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
      }
}
export default fetchData