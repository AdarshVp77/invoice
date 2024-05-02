const axios = require('axios');

// Your Zoho API credentials
const clientId = '1000.NB5BWG7UVI80606OXRAWWASKYOPQ7O';
const clientSecret = '839cbce78a46ad5a73b20cd9e52afbf3a8b47ea3e7';
const refreshToken = 'YOUR_REFRESH_TOKEN';

// Zoho API endpoints
const authEndpoint = 'https://accounts.zoho.com/oauth/v2/token';
const invoiceEndpoint = 'https://books.zoho.com/api/v3/invoices';

// Function to authenticate and get access token
async function getAccessToken() {
    try {
        const response = await axios.post(authEndpoint, {
            client_id: clientId,
            client_secret: clientSecret,
            refresh_token: refreshToken,
            grant_type: 'refresh_token'
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
        throw error;
    }
}

// Function to create an invoice
async function createInvoice(accessToken) {
    try {
        const invoiceData = {
            // Add your invoice data here
        };

        const response = await axios.post(invoiceEndpoint, invoiceData, {
            headers: {
                'Authorization': `Zoho-oauthtoken ${accessToken}`
            }
        });
        console.log('Invoice created successfully:', response.data);
    } catch (error) {
        console.error('Error creating invoice:', error);
        throw error;
    }
}

// Main function to initiate the process
async function main() {
    try {
        const accessToken = await getAccessToken();
        await createInvoice(accessToken);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the main function
main();
