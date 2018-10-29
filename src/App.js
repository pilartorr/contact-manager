import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import NewContact from './views/NewContact';
import Contacts from './views/Contacts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path='/' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/newcontact' component={NewContact}/>
            <Route path='/contacts' component={Contacts}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
