import React, { useState } from "react";
import "../../styles/login.scss";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BadgeIcon from "@mui/icons-material/Badge";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const dispatch = useDispatch();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginToApp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        })
      );
    } catch (error) {
      // Handle error if login fails
      console.error("Error logging in:", error.message);
    }
  };
  const registerToApp = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      return alert("Please enter a full name!");
    }

    const fullName = firstName + " " + lastName;
    console.log(fullName);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Update the user's profile with the provided full name and an empty photoUrl
      await updateProfile(user, {
        displayName: fullName,
        photoURL: "",
      });
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: fullName,
          photoUrl: "",
        })
      );
    } catch (error) {
      // Handle error if registration fails
      console.error("Error creating user:", error.message);
    }
  };

  const handleRegister = () => {
    setIsRegistered((isRegistered) => !isRegistered);
  };

  return (
    <div className="login">
      {isRegistered ? (
        <>
          <p>USE FOR FREE</p>
          <h1 className="login__heading">
            Log In<span className="login__blue_dot">.</span>
          </h1>
          <h3>
            Not A Member?{" "}
            <span
              style={{
                color: "#1d90f5",
                fontWeight: "bolder",
                cursor: "pointer",
              }}
              onClick={handleRegister}
            >
              Register
            </span>
          </h3>
        </>
      ) : (
        <>
          <p>START FOR FREE</p>
          <h1 className="login__heading">
            Create new account<span className="login__blue_dot">.</span>
          </h1>
          <h3>
            Already A Member?{" "}
            <span
              style={{
                color: "#1d90f5",
                fontWeight: "bolder",
                cursor: "pointer",
              }}
              onClick={handleRegister}
            >
              Log In
            </span>
          </h3>
        </>
      )}
      <div className="login__form">
        <form action="onSubmit">
          <div className="login__form_name">
            <div
              className={`login__form_Fname ${
                isFirstNameFocused || firstName ? "active" : ""
              }`}
            >
              <input
                id="Fname"
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                onFocus={() => setIsFirstNameFocused(true)}
                onBlur={() => setIsFirstNameFocused(false)}
              />
              <label htmlFor="Fname">First name</label>
              <BadgeIcon className="login__label_icon" />
            </div>
            <div
              className={`login__form_Lname ${
                isLastNameFocused || lastName ? "active" : ""
              }`}
            >
              <input
                id="Lname"
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                onFocus={() => setIsLastNameFocused(true)}
                onBlur={() => setIsLastNameFocused(false)}
              />
              <label htmlFor="Lname">Last name</label>
              <BadgeIcon className="login__label_icon" />
            </div>
          </div>
          <div
            className={`login__form_email ${
              isEmailFocused || email ? "active" : ""
            }`}
          >
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
            />
            <label htmlFor="email">Email</label>
            <EmailIcon className="login__label_icon" />
          </div>
          <div
            className={`login__form_password ${
              isPasswordFocused || password ? "active" : ""
            }`}
          >
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <label htmlFor="password">Password</label>
            <VisibilityIcon className="login__label_icon" />
          </div>
          {isRegistered ? (
            <>
              <div className="login__form_button">
                <button type="submit" onClick={loginToApp}>
                  Sign In
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="login__form_button">
                <button type="submit" onClick={registerToApp}>
                  Create account
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
