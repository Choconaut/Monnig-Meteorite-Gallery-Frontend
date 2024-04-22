const host1 = "http://localhost:8080/api/v1/meteorites";
const host2 = "http://localhost:8080/api/v1/meteorites/loaned";
const host3 = "http://localhost:8080/api/v1/samplehistory";
const host4 = "http://localhost:8080/api/v1/meteorites?page=1&size=1&sort=monnigNumber"


const fetchMeteoriteId = async () => {
    try {
        const response = await fetch(host1);
        if (!response.ok) {  // Check if the HTTP status code is 200-299
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching meteorite Id:", error);
        throw error;  // Re-throw the error if you might want to handle it further up the call stack
    }
};

export { fetchMeteoriteId };

const fetchAllMeteorite = async () => {
    try {
        const response = await fetch(host1);
        if (!response.ok) {  // Check if the HTTP status code is 200-299
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching all meteorites:", error);
        throw error;  // Re-throw the error if you might want to handle it further up the call stack
    }
};

export { fetchAllMeteorite };

const fetchAllLoanedMeteorites = async () => {
    try {
        const response = await fetch(host2);
        if (!response.ok) {  // Check if the HTTP status code is 200-299
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching all loaned meteorites:", error);
        throw error;  // Re-throw the error if you might want to handle it further up the call stack
    }
};

export { fetchAllLoanedMeteorites };

const fetchMeteorites = async () => {
    try {
        const response = await fetch(host4);
        if (!response.ok) {  // Check if the HTTP status code is 200-299
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching all loaned meteorites:", error);
        throw error;  // Re-throw the error if you might want to handle it further up the call stack
    }
};

export { fetchMeteorites };

const fetchSampleHistory = async () => {
    try {
        const response = await fetch(host3);
        if (!response.ok) {  // Check if the HTTP status code is 200-299
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching sample history:", error);
        throw error;  // Re-throw the error if you might want to handle it further up the call stack
    }
};

export { fetchSampleHistory};
