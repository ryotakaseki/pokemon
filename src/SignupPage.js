import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Link, withRouter} from 'react-router-dom';
import { auth } from './firebase';


class SignupPage extends React.Component {
  state = {
    email: '',    //入力欄は文字列型になるのでデータになる
    password: null　　//どんな形で帰ってくるかわからないオブジェクトなのか配列なのか
  };

  signup = () => {
    auth
  .createUserWithEmailAndPassword(this.state.email, this.state.password)
   .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    console.log(user)

    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
  });
  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

   changePassword = (event) => {
     this.setState({
       password: event.target.value,
     });
   };


  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            新規会員登録
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={this.email}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.password}
              />

              <Button color="teal" fluid size="large" onClick={this.signup}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            すでにアカウントを持っていますか？
            <Link to="/login">ログイン</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignupPage;
