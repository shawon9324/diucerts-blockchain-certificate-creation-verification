import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import web3 from "./web3.js";
import "./App.css";
import Navhead from "./components/navbar";
import Forms from "./components/form";
import Getcert from "./components/getcert";
import certcontract from "./config.js";
import Certificate from "./components/certificate";
import VerifyTrx from "./components/verifytrx";
import Swal from 'sweetalert2';

class App extends Component {
  state = {
    account: "",
    name: "",
    course: "",
    txh: "",
    id: "",
    output: [],
    tofound: ""
  };
  componentDidMount() {
    console.log('mounted')
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    await window.ethereum.enable()
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    this.setState({ account: accounts[0] });
  }

  add = data => {
    var name = data.fname + " " + data.lname;
    certcontract.methods.addcert(name, data.course, data.email).send(
      {
        from: this.state.account,
        gas: 500000
      },
      (error, result) => {
        if (error) console.log("error " + error);
        else {
          this.setState({ name: data.fname + " " + data.lname });
          this.setState({ course: data.course });
          this.setState({ txh: result });
          certcontract.methods
            .getid()
            .call({ from: this.state.account }, (error, result) => {
              this.setState({ id: result });
              if (!error) console.log(result);
              else console.log(error);
            });
        }
      }
    );
  };
  get = data => {
    console.log(data.id);
    certcontract.methods
      .getcert(data.id)
      .call({ from: this.state.account }, (error, result) => {
        if (data.id>75 && (!error)) {
          const v = Object.values(result);
          this.setState({ output: v });
          this.setState({ tofound: true });
          Swal.fire({
           
            icon: 'success',
            title: 'Verified Successfully',
            text: 'Certificate ID:'+data.id,
            showConfirmButton: false,
            timer: 1500
          })
          console.log(this.state.output);
        } else Swal.fire({
          title: 'Sorry!',
          text: ' Certificate Not Found ',
          icon: 'error',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            this.setState({ tofound: false });
          }
        })
      });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Navhead />
          <Route
            path="/"
            exact
            render={() => <Forms addcertificate={this.add} />}
          />
          <Route
            path="/verify"
            render={() => (
              <Getcert
                getcertificate={this.get}
                yes={this.state.tofound}
                details={this.state.output}
              />
            )}
          />
          <Route
            path="/verify-trx"
            render={() => (
              <VerifyTrx
                
              />
            )}
          />
          <Route
            path="/view"
            component={() => (
              <Certificate
                sname={this.state.name}
                course={this.state.course}
                txh={this.state.txh}
                id={this.state.id}
              />
            )}
          />
        </Router>  
      </div>
      
    );
  }
}

export default App;
