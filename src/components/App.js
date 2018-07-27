import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import AddPoll from "./AddPoll";
import Poll from "./Poll";
import Nav from './Nav';


class App extends Component {
  componentDidMount() {
    console.log("what's prop:", this.props);
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/leaderboard" exact component={Leaderboard} />
                <Route path="/polls/:id" exact component={Poll} />
                <Route path="/add" exact component={AddPoll} />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authedUser === null
  }
}

export default connect(mapStateToProps)(App)