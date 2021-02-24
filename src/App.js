import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = {
    inputValue: '',
    error: '',
    data: null,
  };

  // class型のコンポーネントの時はconstはいらない
  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  search = async () => {
    try {
      const search =
        'https://pokeapi.co/api/v2/pokemon/' + this.state.inputValue;
      const response = await axios.get(search);
      const data = response.data;
      this.setState({
        data: data,
      });
      this.setState({ error: '' });
    } catch (err) {
      this.setState({ error: 'ポケモンの名前が間違っています！' });
      this.setState({
        data: null,
      });
    }
  };

  render() {
    return (
      <div class="flex flex-col items-center">
        <div class="font-bold text-2xl text-gray-500 my-12">
          <h3>ポケモン図鑑</h3>
        </div>
        <div class="my-8 w-96">
          <div class="bg-blue-500 w-full">
            <input
              class="text-center w-full text-3xl p-3 border-b border-gray-100 outline-none font-sans text-gray-700"
              value={this.state.inputValue}
              onChange={(event) => this.inputChange(event)}
            />
          </div>
          <div class="my-8 flex justify-center">
            <button
              class="mx-auto rounded-lg px-24 py-4 inline-block bg-red-500 text-white font-bold"
              onClick={this.search}
            >
              検索
            </button>
          </div>
          <div>
            <h2 class="text-center text-red-500 text-xl">{this.state.error}</h2>
          </div>
        </div>
        <div>
          {this.state.data ? <div>体重：{this.state.data.weight}</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
