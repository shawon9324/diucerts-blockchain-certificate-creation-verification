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
              <ListGroup.Item disabled variant="info">Certificate Details</ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center" variant="info">Name: <span>{this.props.details[0]}</span> </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center" variant="info">Course/Program:<span>{this.props.details[1]}</span> </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center" variant="info">Instituion: <span>{this.props.details[2]}</span></ListGroup.Item>
            </ListGroup>
          </div>
      </div>
    );
  }
}

export default CertFound;
