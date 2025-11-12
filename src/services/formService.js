import axios from 'axios';

/**
 * Submits form data to a specified endpoint using a POST request.
 * @param {string} endpoint - The URL endpoint to which the data will be sent.
 * @param {object} data - The payload/data to be sent in the request body.
 * @returns {Promise<object>} - A promise that resolves with the response data on success.
 * @throws {Error} - Throws an error if the API request fails, containing the error message.
 */
export const submitForm = async (endpoint, data) => {
    try {
        const response = await axios.post(endpoint, data, {
            headers: {
                'Accept': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        // Log the detailed error for debugging purposes
        console.error("Form submission error:", error.response ? error.response.data : error.message);

        // Re-throw a user-friendly error to be handled by the UI
        throw new Error('There was a problem submitting the form. Please try again later.');
    }
};