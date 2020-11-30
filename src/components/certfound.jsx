import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
class CertFound extends Component {
  state = { name: "", sender: "", course: "" };
  render() {
    return (
        <div>
          <div>
             <ListGroup variant="flush">
              <ListGroup.Item variant="success">Congratulations! Your certificate has been found in DIUCERTS</ListGroup.Item>
              <ListGroup.Item disabled variant="info">Certificate Details</ListGroup.Item>
              <ListGroup.Item variant="info">Name: {this.props.details[0]}</ListGroup.Item>
              <ListGroup.Item variant="info">Course/Program: {this.props.details[1]}</ListGroup.Item>
              <ListGroup.Item variant="info">Instituion: {this.props.details[2]}</ListGroup.Item>
            </ListGroup>
          </div>
      </div>
    );
  }
}

export default CertFound;
