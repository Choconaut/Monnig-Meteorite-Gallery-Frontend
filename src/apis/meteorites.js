const fetchMeteorites = async (attribute, query) => {
  const url = `http://localhost:8080/api/v1/meteorites/search?${attribute}=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // Check if the HTTP status code is 200-299
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching all loaned meteorites:", error);
    throw error; // Re-throw the error if you might want to handle it further up the call stack
  }
};

export { fetchMeteorites };
