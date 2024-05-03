async function login(loginInfo) {
    const response = await fetch('http://localhost:8080/api/v1/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
    });

    if (!response.ok) {
        // This throws an error and lets the calling function handle it appropriately.
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to login');
    }

    return response.json(); // Assuming the server responds with JSON containing the token.
}

export default {
    login
};
