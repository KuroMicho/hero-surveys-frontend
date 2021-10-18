import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { logout, useAuthDispatch } from "../../context";
// import UserContext from "../../context/UserContext";

const Header = () => {
  const dispatch = useAuthDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout(dispatch);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Hero Surveys</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/surveys">
            Surveys
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          <Nav.Link as="img" src="pedro.png" alt="user avatar"></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
