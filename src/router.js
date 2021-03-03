import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <div>ログイン</div>
          </Route>
          <Route path="/signup">
            <div>新規会員登録</div>
          </Route>
          <Route path="/zukan">
            <div>ポケモン図鑑</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
