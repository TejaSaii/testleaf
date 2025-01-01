function fetchDataFromDatabase(data) {
  console.log("Fetching data from database");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve("Data fetched successfully");
      } else reject("Data not found");
    }, 3000);
  });
}

fetchDataFromDatabase(true)
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));

fetchDataFromDatabase(false)
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));
