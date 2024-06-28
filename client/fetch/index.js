// URL: https://jsonplaceholder.typicode.com/users

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
