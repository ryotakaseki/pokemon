import React from "react";
import { auth, googleAuth } from "./firebase";

class Auth extends React.Component {
  state = {
    Email: null,
  };

  async login() {
    try {
      const response = await auth.signInWithPopup(googleAuth);
      console.log(response.additionalUserInfo.profile.email);
      const mail = response.additionalUserInfo.profile.email;
      this.setState({
        Email: mail,
      });
    } catch (err) {
      console.log(err.err);
    }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.login}>ログイン</button>
        </div>
        <div>{/* email:{this.state.additionalUserInfo.profile.email} */}</div>
      </div>
    );
  }
}

export default Auth;

//鯖を作る必要がない簡単にやってくれる
