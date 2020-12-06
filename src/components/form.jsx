import React, { Component } from "react";
import { Form, Button,Card } from "react-bootstrap";
import b1 from "../background.jpg";
import Swal from 'sweetalert2'
import DribbleButton from 'react-dribble-button';

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
  success = () => {
    let timerInterval
    Swal.fire({
    title: 'Creating your Certificate!',
    html: 'Please Wait . . .  <b></b> milliseconds.',
    timer: 60000,
    timerProgressBar: true,
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
      Swal.fire({
        title: 'Done!',
        text: 'Your Certificate has been created successfully!',
        icon: 'success',
      })
    }
    })
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
    const isEnabled = this.canBeSubmitted();
    return (
      <div
        className="container-fluid "
        style={{
          height: "867px",
          background: `url(${b1}) no-repeat `,
          backgroundSize: "cover"
        }}
      >
        <div  style={{
          backgroundColor: "rgba(2, 12, 20, 0.8)",
          bottom: "0",
          color: "darkcyan",
          fontSize: "16px",
          fontWeight: "bold",
          left: "0",
          padding: "10px",
          position: "fixed",
          right: "0",
          zIndex: 10
        }}>Copyright ©️ 2020 -  DIUCerts Decentralized Application <br/>
        A Blockchain-Based Solution for Verification of Educational Certificates
        <br/>
          🌐 diucerts.creative-lab.xyz</div>
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
        
        <div
          style={{ marginBottom: "117px", background: "black" }}
          className="w-100  container pt-3 pb-3 mx-auto"
        >
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat"
            }}
            className="mb-2"
          >
            <h1 style={{
                 color: "#01ea84",
                backgroundColor:'black',
                fontFamily: "Courier New",
              }} >Certificate Registration</h1>
          </h2>
          <Form onSubmit={this.addcertificate}>
            <Form.Group >
              <Form.Control style={form}
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
                placeholder="👨‍🎓 Enter First Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control style={form}
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
                placeholder="👨‍🎓 Enter Last Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control style={form}
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="🎓 Enter Institution  Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control style={form}
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                placeholder="🥇 Enter Course/Program Name"
              />
            </Form.Group>
            <DribbleButton style={{fontFamily:'Courier New',fontSize:'20px'}} color="teal"  onClick={this.success} animationDuration={1000} >🔒 Register</DribbleButton>
          </Form>
          
        </div>
        
      </div>
    );
  }
}

export default Forms;
