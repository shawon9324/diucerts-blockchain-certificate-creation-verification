import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import DribbleButton from 'react-dribble-button';
import { Form, Button } from "react-bootstrap";
class CertFound extends Component {
  state = { name: "", sender: "", course: "" };
  render() {
    const form = {
      padding: "10px",
      backgroundColor: "black",
      borderColor: "#009688 ",
      borderRadius: "4px",
      color: "#01ea84",
      fontFamily: "Courier New",
      display: "block",
      height: "70px",
      fontSize: "23px",
      WebkitBoxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
      boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
    };
    return (


        <div>
          <div>
             <ListGroup >
             <Button style={form}
              className="mt-0"
              type="submit"
               block
            >
              🎉 Congratulations! Your certificate has been found in DIUCERTS
            </Button>
              <DribbleButton style={{fontFamily:'Courier New',fontSize:'24px',fontStyle:'none',textTransform: 'capitalize',}} className="d-flex justify-content-between align-items-center" color="blue-grey"  animationDuration={1000} >👨‍🎓 Name: <span>{this.props.details[0]}</span></DribbleButton>
              <DribbleButton style={{fontFamily:'Courier New',fontSize:'24px',fontStyle:'none',textTransform: 'capitalize',}} className="d-flex justify-content-between align-items-center" color="blue-grey"  animationDuration={1000} >🥇 Course/Program: <span>{this.props.details[1]}</span></DribbleButton>
              <DribbleButton style={{fontFamily:'Courier New',fontSize:'24px',fontStyle:'none',textTransform: 'capitalize',}} className="d-flex justify-content-between align-items-center" color="blue-grey"  animationDuration={1000} >🎓 Instituion: <span>{this.props.details[2]}</span></DribbleButton>
            </ListGroup>
            

          </div>
      </div>
    );
  }
}

export default CertFound;
