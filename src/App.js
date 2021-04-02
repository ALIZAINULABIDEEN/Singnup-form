import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js//bootstrap.bundle";
import "./App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class App extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
  };
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  submitHandler = (e) => {
    e.preventDefault();
    let flag = false;
    if (this.state.name.trim() === "" || this.state.name.trim().length < 1) {
      flag = true;
      this.setState({ nameError: "Please provide valid name" });
    } else {
      this.setState({ nameError: "" });
    }
    if (
      this.state.password.trim() === "" ||
      this.state.password.trim().length < 8
    ) {
      flag = true;
      this.setState({
        passwordError: "Please provide atleast 8 character password",
      });
    } else {
      this.setState({
        passwordError: "",
      });
    }
    if (
      this.state.email.trim() === "" ||
      !this.validateEmail(this.state.email.trim())
    ) {
      flag = true;
      this.setState({
        emailError: "Please provide valid email",
      });
    } else {
      this.setState({
        emailError: "",
      });
    }
    if (flag) return;

    // save data to database now data is validated.
  };

  render() {
    return (
      <div className='row'>
        <div className='col-lg-8'>
          <div class='cont'>
            <div className='mb-5'>
              <h2>
                <b>let's set up your account</b>
              </h2>
            </div>
            <div className='mb-5'>
              Already have an account?
              <a href='#' style={{ textDecoration: "none" }}>
                {"  "}Sign in
              </a>
            </div>

            <form onSubmit={this.submitHandler}>
              <div class='mb-3'>
                <input
                  type='text'
                  class='form-control'
                  id='Name'
                  placeholder='Your name'
                  aria-describedby='Fullname'
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                  value={this.state.name}
                />
                {this.state.nameError && (
                  <p className='text-danger'>{this.state.nameError}</p>
                )}
              </div>
              <div class='mb-3'>
                <input
                  type='email '
                  class='form-control'
                  id='exampleInputEmail1'
                  placeholder='Email address'
                  aria-describedby='emailHelp'
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                  value={this.state.email}
                />
                {this.state.emailError && (
                  <p className='text-danger'>{this.state.emailError}</p>
                )}
              </div>

              <div class='mb-3'>
                <select id='disabledSelect' class='form-select'>
                  <option>I would describe my user type as</option>
                </select>
              </div>
              <div class='mb-3'>
                <input
                  placeholder='Password'
                  type='password'
                  class='form-control'
                  id='exampleInputPassword1'
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                  value={this.state.password}
                />
                {this.state.passwordError && (
                  <p className='text-danger'>{this.state.passwordError}</p>
                )}

                <div id='passwordHelpBlock' class='form-text'>
                  Minimum 8 characters
                </div>
              </div>
              <button type='submit' class='btn btn-light button-control'>
                Next
              </button>
            </form>
          </div>
        </div>
        <div className='col-lg-4' style={{ background: "#1D7CF2" }}>
          <div class='content'>
            <h2 className='mb-5'>Dummy Heading</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
