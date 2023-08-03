import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Navbar/Header";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Authentication/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

function App() {
  // pull the user from the data store using selector
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // useEffect hook to add the AuthStateChange listener when the component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        // If the user is logged in, dispatch the login action with user info to redux layer (store.js file)
        // userSlice.js will update state using this below payload required with login dispatch
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: "",
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="app__body">{!user ? <Login /> : <HomePage />}</div>
    </div>
  );
}

export default App;
