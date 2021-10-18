import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container fluid="md">
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
