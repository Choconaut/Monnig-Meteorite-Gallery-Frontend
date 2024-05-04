const searchLoans = async (attribute, query) => {
  const url = `https://monnig-meteor-online.azurewebsites.net/api/v1/loans/search?${attribute}=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error searching loans:", error);
    throw error;
  }
};

export { searchLoans };

