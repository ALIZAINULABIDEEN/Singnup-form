import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js//bootstrap.bundle";
import "./App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8">
          <div class="cont">
            <div className="mb-5">
              <h2>
                <b>let's set up your account</b>
              </h2>
            </div>
            <div className="mb-5">
              Already have an account?
              <a href="#"
              style={{textDecoration:"none"}}
              >{"  "}Sign in</a>
            </div>

            <form>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Your name"
                  aria-describedby="Fullname"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email "
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email address"
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="mb-3">
                <select id="disabledSelect" class="form-select">
                  <option>I would describe my user type as</option>
                </select>
              </div>
              <div class="mb-3">
                <input
                  placeholder="Password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
                <div id="passwordHelpBlock" class="form-text">
                  Minimum 8 characters
                </div>
              </div>
              <button type="button" class="btn btn-light button-control">
                Next
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-4" style={{background:"#1D7CF2"}}>
        <div class="content">
          <h2 className="mb-5">Dummy Heading</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
