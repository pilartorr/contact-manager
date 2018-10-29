import React, { Component, Fragment } from 'react';
import Header from './Header';

class SignUp extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <div className="container d-flex">
          <div className="m-auto">
            <h3 className="mb-3 text-center">SIGN UP</h3>
  				  <form action="" className="row loginForm">
              <div className="row mr-4">
                <input type="text" id="name" className="form-control" placeholder="User Name" />
              </div>

              <div className="row mr-4">
                <input type="password" id="paw" className="form-control" placeholder="Password" />
              </div>

              <div className="row">
                <button type="submit" id="submit" className="form-control btn btn-primary" value="Submit">SUBMIT</button>
              </div>
  				  </form>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default SignUp;
