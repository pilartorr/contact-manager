import React, { Component, Fragment } from 'react';
import Header from './Header';

class Contacts extends Component{
  render(){
    return (
      <Fragment>
        < Header />
        <div className="container d-flex">
          <div className="m-auto">
            <h3 className="mb-3 text-center">CONTACTS LIST</h3>
            <div className="row" style={{width: "50vw"}}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="text-center">First Name</th>
                    <th className="text-center">Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Contacts;
