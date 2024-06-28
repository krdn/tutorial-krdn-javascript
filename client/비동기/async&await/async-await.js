// https://www.youtube.com/watch?v=6-8mbuUC3fk&list=PLZ5oZ2KmQEYgab5iy6_L8XGMKxhCAN8RV&index=5

async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  console.log(data);
}

fetchUser();

