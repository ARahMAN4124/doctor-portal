import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./Config";
import { MyContext } from "../../App";
import { useHistory, useLocation } from "react-router";

firebase.initializeApp(firebaseConfig);

const LogInForm = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [logInUser, setLogInUser] = useContext(MyContext);
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const newUser = { ...user };
        setLogInUser(newUser);
        history.replace(from);
        storeAuthToken();
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section>
      <div className="shadow p-5">
        <div className="form-group">
          <label htmlFor="">User Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-danger">
            Forgot your password?
          </label>
        </div>
        <div className="from-group mt-5">
          <button className="btn btn-info" onClick={handleGoogle}>
            Google Sign in
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogInForm;
