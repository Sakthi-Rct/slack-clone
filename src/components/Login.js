import React from "react";
import "../Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          alt="Slack"
        />
        <h1>Sign in to Pico Zen</h1>
        <p>picozen.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
