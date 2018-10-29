import React, { Component, Fragment } from 'react';
import Header from './Header';

class NewContact extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <div className="container d-flex">
          <div className="m-auto">
        	  <h3 className="mb-3 text-center">ADD A NEW CONTACT</h3>
  				  <form action="" className="row loginForm">
              <div className="row mr-4">
                <input type="text" id="f-name" className="form-control" placeholder="First Name" />
              </div>

              <div className="row mr-4">
                <input type="text" id="l-name" className="form-control" placeholder="Last Name" />
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
export default NewContact;
