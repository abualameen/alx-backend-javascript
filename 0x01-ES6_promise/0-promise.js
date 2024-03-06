export default async function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data from API (this could be an actual API call)
    // In this example, let's assume the request failed
    reject(new Error('Failed to fetch data from API'));
  });
}
