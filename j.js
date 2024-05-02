// const clientId = "1000.NB5BWG7UVI80606OXRAWWASKYOPQ7O";
// const clientSecret = "839cbce78a46ad5a73b20cd9e52afbf3a8b47ea3e7";

const axios = require('axios');

const clientId = '1000.NB5BWG7UVI80606OXRAWWASKYOPQ7O';
const clientSecret = '839cbce78a46ad5a73b20cd9e52afbf3a8b47ea3e7';
const redirectUri = 'https://localhost:3002/'; // This can be any valid URI

async function getRefreshToken() {
    try {
        const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
            params: {
                grant_type: 'client_credentials',
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri
            }
        });
        const refreshToken = response.data.refresh_token;
        console.log('Refresh Token:', refreshToken);
        // Store the refresh token securely in your application
        return refreshToken;
    } catch (error) {
        console.error('Error obtaining refresh token:', error.response.data);
        throw error;
    }
}

// Call the function to obtain the refresh token
getRefreshToken();


