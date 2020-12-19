import { Component } from "react";
// Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
// Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Stylesheets
import "./style/app.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="wrapper">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About/" component={About} />
            <Route path="/Contact/" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
