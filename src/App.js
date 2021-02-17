import React from "react";

class App extends React.Component {
  state = {
    inputValue: "",
  };

  // class型のコンポーネントの時はconstはいらない
  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  buttonChange = () => {
    alert(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(event) => this.inputChange(event)}
        />
        <button onClick={this.buttonChange}>検索</button>
      </div>
    );
  }
}

export default App;
