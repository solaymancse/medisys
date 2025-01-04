const TOKEN_KEY = 'authToken';

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token); // Store the token securely
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY); // Retrieve the token
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY); // Remove the token
};
