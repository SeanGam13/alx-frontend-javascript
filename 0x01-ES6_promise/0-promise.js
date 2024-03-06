function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (responseFromAPI) {
      resolve(responseFromAPI); // resolve with API response
    } else {
      reject("Error: API call failed"); // reject with error message
    }
  });
}

export default getResponseFromAPI;
