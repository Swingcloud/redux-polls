import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";

class AddPoll extends Component {
  state = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
  };

  handelInputChange = (e) => {
    const { value, name } = e.target;

    this.setState(() => ({
      [name]: value,
    }))
  };

  isDisabled = () => {
    const { question, a, b, c, d } = this.state;

    return question === ""
      || a === ""
      || b === ""
      || c === ""
      || d === ""
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.history.push("/");
    this.props.dispatch(handleAddPoll(this.state));
  };

  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: 5 }}>Question?</h3>
        <input
          value={question}
          onChange={this.handelInputChange}
          name="question"
          className="input"
          type="text"
        />
        <h3>Options?</h3>
        <label className="label" htmlFor="a">A.</label>
        <input
          value={a}
          onChange={this.handelInputChange}
          name="a"
          id="a"
          className="input"
          type="text"
        />
        <label className="label" htmlFor="a">B.</label>
        <input
          value={b}
          onChange={this.handelInputChange}
          name="b"
          id="b"
          className="input"
          type="text"
        />
        <label className="label" htmlFor="a">C.</label>
        <input
          value={c}
          onChange={this.handelInputChange}
          name="c"
          id="c"
          className="input"
          type="text"
        />
        <label className="label" htmlFor="a">D.</label>
        <input
          value={d}
          onChange={this.handelInputChange}
          name="d"
          id="d"
          className="input"
          type="text"
        />

        <button className="btn" type="submit" disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    )
  }
}

export default connect()(AddPoll);