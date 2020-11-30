import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../background.jpg";
import CertFound from "./certfound";
import Spinner from 'react-bootstrap/Spinner'
import DribbleButton from 'react-dribble-button';
class Getcert extends Component {
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  getcertificate = event => {
    event.preventDefault();
    this.props.getcertificate(this.state);
  };
  state = {
    id: "",
    txh: ""
  };
  render() {
    const form = {
      padding: "10px",
      backgroundColor: "transparent",
      borderColor: "#01ea84",
      color: "#01ea84",
      fontFamily: "Courier New",
      display: "block",
      height: "70px",
      fontSize: "35px",
      borderRadius: "4px",
      WebkitBoxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
      boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
    };
    return (
      <div
        style={{
          background: `url(${b1}) no-repeat `,
          backgroundSize: "cover",
          border: "1px solid black",
          height: "867px",
        }}
        className="container-fluid "
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "60px",
            color: "#66ffe7"
          }}
          className="mb-5 pt-5"
        >
        </h1>
        <div className=" mx-auto w-50 mt-5">
          
          <Form
            className="px-3 pt-4"
            onSubmit={this.getcertificate}
            style={{ background: "black" }}
          >
            <h1
            style={{
              color: "#01ea84",
              backgroundColor:'black',
              fontFamily: "Courier New",
            }}
            className="mb-1"
          >
             Certificate Verification
            <hr
            className="mt-1"
            style={{ color: "#01ea84", backgroundColor: "#01ea84", height: 1 }}
          />
          </h1>
            <Form.Group >
              <Form.Control  style={form}
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.handleChange}
                placeholder="🏷️ Enter Certificate ID"
              />
            </Form.Group>
            <DribbleButton style={{fontFamily:'Courier New',fontSize:'20px'}} className="mb-4" color="teal"  onClick={this.onClick} animationDuration={1000} ><Spinner animation="grow" size="sm" /> Verify Certificate</DribbleButton>
          </Form>
          {this.props.yes ? <CertFound details={this.props.details} /> : null}
        </div>
      </div>
    );
  }
}

export default Getcert;
