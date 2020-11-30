import React, { Component } from "react";
import { Form, Button,Card } from "react-bootstrap";
import b1 from "../background.jpg";
class Forms extends Component {
  canBeSubmitted() {
    const { fname, lname, course, email } = this.state;
    return (
      fname.length > 0 &&
      lname.length > 0 &&
      course.length > 0 &&
      email.length > 0
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addcertificate = event => {
    event.preventDefault();
    this.props.addcertificate(this.state);
    console.log(this);
  };

  state = {
    fname: "",
    lname: "",
    course: "",
    email: ""
  };
  
  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div
        className="container-fluid "
        style={{
          height: "100vh",
          background: `url(${b1}) no-repeat `,
          backgroundSize: "cover"
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "60px",
            color: "#66ffe7"
          }}
          className="mb-5 pt-3"
        >
        </h1>
        
        <div
          style={{ marginBottom: "117px", background: "rgba(220,220,220,0.5)" }}
          className="w-50 container pt-3 pb-3 mx-auto"
        >
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat"
            }}
            className="mb-2"
          >
            
          <Card>
            <Card.Header style={{
                color:"white",
                backgroundColor:'black',
              }} >Register Certificates on DIUCERTS</Card.Header>
          </Card>
          </h2>
          <Form onSubmit={this.addcertificate}>
            <Form.Group>
              <Form.Control
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Enter Institution  Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                placeholder="Enter Course/Program Name"
              />
            </Form.Group>
            <Button
              
              className="mt-3"
              variant="success"
              type="submit"
               block
            >
              Register
            </Button>
          </Form>
        </div>
        
      </div>
    );
  }
}

export default Forms;
