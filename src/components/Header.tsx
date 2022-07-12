import { SyntheticEvent } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { logout } from '../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { UserState} from '../reducers/userReducers';

const Header = () => {

  const dispatch = useDispatch();

  const userLogin = useSelector<RootState, UserState>((state: RootState) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = async (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(logout())

  }

  return (
    <Navbar className='sixnines-bg' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>
          <img src={process.env.PUBLIC_URL + '/logo.svg'}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {userInfo ? (
            <Nav className='ms-auto'>
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav className='ms-auto'>
              <Nav.Link href='/signup'>Sign Up</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
