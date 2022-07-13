import { SyntheticEvent } from 'react';
import { Col, Row, Badge, Button } from 'react-bootstrap';
import { logout } from '../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { UserState} from '../reducers/userReducers';
import { Gear, Inbox, BoxArrowDownRight } from 'react-bootstrap-icons';

interface prop{
    firstName: string;
}

const Sidebar = ({firstName}: prop) => {

  const dispatch = useDispatch();

  const userLogin = useSelector<RootState, UserState>((state: RootState) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = async (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(logout())

  }

  return (
    <Col className="sidebar-column">
          <div className="sidebar-column-mainrow">
            <Row>
              <div className="sidebar-column-row">
                <h4>Welcome {firstName}!</h4>
              </div>
            </Row>
            <Row>
              <div className="sidebar-column-row">
                <p>
                  <strong>Company requisites:</strong>
                </p>
                <p>SMARTDEC 2022</p>
              </div>
            </Row>
            <Row>
              <div className="sidebar-column-row">
                <p>ID Nr:</p>
                <p>5684687425</p>
              </div>
            </Row>
            <Row>
              <div className="sidebar-column-row">
                <p>
                  <Inbox />
                  &nbsp;<u>Inbox</u>&nbsp;
                  <Badge pill bg="warning" text="dark">
                    3
                  </Badge>
                </p>
                <p>
                  <Gear />
                  &nbsp;<u>Account settings</u>
                </p>
              </div>
            </Row>
          </div>
          <div className="sidebar-column-mainrow">
            <Row>
              <div className="sidebar-column-button">
                <Button onClick={logoutHandler} variant="outline-light">
                  <BoxArrowDownRight />
                  &nbsp;&nbsp; Logout
                </Button>
              </div>
            </Row>
          </div>
        </Col>
  )
}

export default Sidebar
