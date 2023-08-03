# React-Firebase-Homepage

## Description

This is a basic homepage project built using React, Redux, Sass, and Firebase integration. It allows users to sign up, log in, and log out using Firebase authentication. Users can also add new posts, which are displayed in a feed using Firestore for data storage. The project includes animations using the React Flip Move library.

## Screenshots

![Homepage](https://github.com/Aditya0257/react-firebase-homepage/blob/main/homepage.png?raw=true)

## Features

- User authentication (sign up, log in, log out) using Firebase
- Adding new posts to Firestore database
- Displaying posts in a feed with animations
- Responsive design with Sass

## Setup

1. Clone the repository:

```bash
git clone https://github.com/Aditya0257/react-firebase-homepage.git
cd your-repo
```

2. Install dependencies:

```bash
npm install
```

3. Create a Firebase project and set up authentication and Firestore database.

4. Create a .env file in the root of the project and add your Firebase configuration:

```env
REACT_APP_API_KEY=YOUR_API_KEY
REACT_APP_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_APP_ID=YOUR_APP_ID
```

## Usage

To start the development server:

```bash
npm start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
