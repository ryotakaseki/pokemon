import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import LoginPage from './LoginPage';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <div>
              <div>新規会員登録</div>
              <Link to="/login">ログインページへ</Link>
            </div>
          </Route>
          <Route path="/zukan">
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
