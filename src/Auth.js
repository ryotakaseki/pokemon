import React from "react";

class Auth extends React.Component {
  //renderの外はsetStateを使わないもの
  //何度も読み込まれるから（使えないとこはないけど大変）
  render() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <button
          className="bg-blue-500 text-white p-5 rounded"
          onClick={this.props.hello}
        >
          Google Login
        </button>
      </div>
    );
  }
}

export default Auth;

//鯖を作る必要がない簡単にやってくれる
