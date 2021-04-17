import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import App from "./App";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Auth from "./Auth";
import { auth, googleAuth } from "./firebase";
import Home from "./Home";

class Router extends React.Component {
  state = {
    email: null,
  };
  render() {
    const googleLogin = async () => {
      try {
        const response = await auth.signInWithPopup(googleAuth);
        console.log(response.user.email);

        this.setState({
          email: response.user.email,
        });
      } catch (err) {
        console.log("err ", err);
      }
    };

    const loggedIn = this.state.email;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage />
            <div>
              <Link to="/signup">新規会員登録</Link>
            </div>
          </Route>
          <Route path="/signup">
            <SignupPage />
            <div>
              <Link to="/login">ログインページへ</Link>
            </div>
          </Route>
          <Route path="/zukan">
            <App />
          </Route>
          <Route path="/auth">
            {loggedIn ? (
              <Redirect to="/zukan" />
            ) : (
              <Auth email={this.state.email} hello={googleLogin} />
            )}
          </Route>
          <Route path="/">
            <Home />
          </Route>
     </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
