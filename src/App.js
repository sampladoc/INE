import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Users from "./views/users";
import formDialog from "./components/formDialog";


//===

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Users} />
        </Router>
      </div>
    );
  }
}

export default App;