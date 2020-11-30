import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../certstyle.css";

class Certificate extends Component {
  state = {};
  print = event => {
    event.preventDefault();
    window.print();
      
  };
  render() {
    return (
      <div className="w-100 pc" >
        <div  className="w-75 cert" >
          <div>&nbsp;</div>
          <div id="fname" style={{marginTop:"20px",fontSize:"40px",marginRight:"45px"}}>
            <span>{this.props.sname}</span>
          </div>
          <div id="course" style={{marginTop:"65px",marginRight:"40px"}}>
            <style>{`@media print {#course{color:red;}}`}</style>
            <span>&quot; {this.props.course}	&quot;</span>
          </div>
          <div id="txh" style={{marginTop:"106px",marginRight:"280px",fontFamily:"Courier New",fontSize:"16px"}}>
          <style>{`@media print {#txh{color:green;margin-left:10px;font-size:40px}}`}</style>
          <span>{this.props.txh}</span>
          </div>
          <div id="id" style={{marginLeft:"700px",fontFamily:"Courier New",fontSize:"18px"}}>
          <style>{`@media print {#txh{color:green;margin-left:10px;font-size:40px}}`}</style>
            <span>{this.props.id}</span>
          </div>
        </div>
        <Button
          className="btn"
          onClick={this.print}
          variant="success"
          type="submit">
          Print Certificate
        </Button>
      </div>
    );
  }
}

export default Certificate;
