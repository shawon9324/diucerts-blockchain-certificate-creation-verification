import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../background.jpg";
import Spinner from 'react-bootstrap/Spinner'
import Swal from 'sweetalert2'

class Getcert extends Component {

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  gettransaction = event => {
      event.preventDefault();
      let timerInterval
    Swal.fire({
      title: 'Verifying Transaction Key',
      html: 'Please wait . . .',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
          const url = "https://ropsten.etherscan.io/tx/" + this.state.txh;
          window.open(url);
      }
    })
  
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
        <div className=" mx-auto w-50 mb-2 mt-5">
          <h1
            style={{
              color: "cyan",
              fontFamily: "Courier New",
              fontWeight: "bold"
            }}
          >
            Verify the Transaction
            <hr
            className="mt-1"
            style={{ color: "cyan", backgroundColor: "cyan", height: 5 }}
          />
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
              variant="info"
              type="submit"
            >
               <Spinner animation="grow" size="sm" /> Verify Transaction
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Getcert;
