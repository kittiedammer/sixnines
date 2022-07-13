import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserState } from "../reducers/userReducers";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Table } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const HomeScreen = () => {
  const navigate = useNavigate();

  const userLogin = useSelector<RootState, UserState>(
    (state) => state.userLogin
  );

  useEffect(() => {
    if (!userLogin.userInfo) {
      return navigate("/login");
    }
  }, [userLogin.userInfo]);

  const { userInfo } = userLogin;
  const firstName = userInfo ? userInfo.firstName : null;
  return firstName ? (
    <Container fluid>
      <Row>
        <Sidebar firstName={firstName} />
        <Col className="main-content-column">
          <div className="main-content-row">
            <h1>Test table</h1>
            <div className="main-table">
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Bird</td>
                    <td>Next</td>
                    <td>@vk</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  ) : (
    <h1>Welcome to the Home Page!</h1>
  );
};

export default HomeScreen;
