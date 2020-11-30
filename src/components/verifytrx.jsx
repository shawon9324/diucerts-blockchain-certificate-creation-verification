import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../background.jpg";

class Getcert extends Component {

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  gettransaction = event => {
    event.preventDefault();
    const url = "https://ropsten.etherscan.io/tx/" + this.state.txh;
    window.open(url);
    console.log(url);
  };
  state = {
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
        <div className=" mx-auto w-50 mb-5">
          <h1
            style={{
              color: "cyan",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
            className="mt-5 mb-4"
          >
            Verify the Transaction details
          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.gettransaction}
            style={{
              marginBottom: "57px",
              background: "rgba(255,255,255,0.5)"
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="txh"
                value={this.state.txh}
                onChange={this.handleChange}
                placeholder="Enter Transaction Hash Key of the Certificate"
              />
            </Form.Group>
            <Button
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
            >
              Verify Transaction
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Getcert;