// A mock function to mimic making an async request for user data
export function fetchUserDataAPI(userId) {
  // Assuming you have a database or API endpoint to fetch user data
  // You can simulate an asynchronous API call with a timeout
  return new Promise((resolve) =>
    setTimeout(() => {
      // Mock user data based on the userId
      const user = {
        id: userId,
        name: "John Doe", // Replace with the actual user name
        email: "johndoe@example.com", // Replace with the actual user email
        // Other user data...
      };
      resolve({ data: user });
    }, 500)
  );
}
