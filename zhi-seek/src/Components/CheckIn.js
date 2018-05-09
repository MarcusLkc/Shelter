import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Capacity from './Capacity';
import SignUp from './SignUp';
// import Test from './Test';

export default class CheckIn extends React.Component {
  render() {
    return (
        <div className="fix">
        <br/>
        <br/> 
        <br/>
      <Container>
        <Row className="clearfix">
            <Col xs={12} md={6}><Capacity/></Col>
            <Col xs={12} md={6}><SignUp/></Col>
        </Row>
      
      </Container>
      </div>
    );
  }
}
