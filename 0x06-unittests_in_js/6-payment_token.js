function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // Rejecting with an empty object as the function does nothing on failure
            reject({});
        }
    });
}

module.exports = getPaymentTokenFromAPI;
