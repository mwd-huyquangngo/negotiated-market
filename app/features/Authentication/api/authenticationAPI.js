import 'whatwg-fetch';

const API_URL = 'http://localhost:3000/users';

const API_HEADERS = {
    'Content-Type': 'application/json',
};

let AuthenticationAPI = {
    async login(username, password) {
        const response = await fetch(`${API_URL}?name=${username}&password=${password}`, {
            method: 'GET',
            headers: API_HEADERS,
        });
        return response.json();
    },
};

export default AuthenticationAPI;
