import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../background.jpg";
import CertFound from "./certfound";
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
    return (
      <div
        style={{
          background: `url(${b1}) no-repeat `,
          backgroundSize: "cover",
          border: "1px solid black",
          height: "100vh",
          width: "100%"
        }}
        className="container-fluid "
      >
        <div className=" mx-auto w-50">
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
            className=" mt-3 mb-4"
          >
            Verify the Certificate
            <hr
            className="mt-5 "
            style={{ color: "cyan", backgroundColor: "cyan", height: 5 }}
          />
          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.getcertificate}
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.handleChange}
                placeholder="Enter Certificate ID"
              />
            </Form.Group>
            <Button
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
            >
              Verify Certificate
            </Button>
          </Form>
          {this.props.yes ? <CertFound details={this.props.details} /> : null}
        </div>
      </div>
    );
  }
}

export default Getcert;
