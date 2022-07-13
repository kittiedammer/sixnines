import { SyntheticEvent, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
//import { RouteComponentProps } from 'react-router';
import { useNavigate } from "react-router-dom";
import FormContainer from '../components/FormContainer';
import { useSelector, useDispatch} from 'react-redux';
import { login } from '../actions/userAction';
import { RootState } from '../store';
import { UserState } from '../reducers/userReducers';

/*interface Props {
  history: RouteComponentProps['history']
}*/

const LoginScreen = (/*{ history }: Props*/) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector<RootState, UserState>((state: RootState) => state.userLogin);
  const {userInfo} = userLogin;

  useEffect(() => {
    if(userInfo != undefined && userInfo.firstName) {
      //history.push('/');
    }
  }, [userInfo/*, history*/])
  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    // interact with the backend using fetch
    // reference dispatch
    dispatch(login(email, password));
    //history.push('/')
    navigate("/", { replace: true });
  }

  return (
    <FormContainer>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className='my-3'>
          <Form.Label>Login</Form.Label>
          <Form.Control
            placeholder='Enter your login'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='my-3'>
          Login
        </Button>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
