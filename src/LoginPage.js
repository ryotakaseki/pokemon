import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {auth} from './firebase';

class LoginPage extends React.Component {
  state={
    email:'',
    password:''
  }

   login = () => {
    auth
    .signInWithEmailAndPassword(this.state.email, this.statepassword)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log('ログイン情報確認', user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
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
            ログインしましょう
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={this.changeEmail}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.changePassword}
              />

              <Button color="teal" fluid size="large" onClik={this.login}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            まだアカウント持っていませんか？
            <Link to="/signup">新規会員登録</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
export default LoginPage;
