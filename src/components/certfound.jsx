import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
class CertFound extends Component {
  state = { name: "", sender: "", course: "" };
  render() {
    return (
        <div>
          <div>
             <ListGroup >
              <ListGroup.Item  variant="success">Congratulations! Your certificate has been found in DIUCERTS</ListGroup.Item>
              <ListGroup.Item variant="info">Certificate Details</ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center" variant="light">Name: <span>{this.props.details[0]}</span> </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center" variant="light">Course/Program:<span>{this.props.details[1]}</span> </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center" variant="light">Instituion: <span>{this.props.details[2]}</span></ListGroup.Item>
            </ListGroup>
          </div>
      </div>
    );
  }
}

export default CertFound;
