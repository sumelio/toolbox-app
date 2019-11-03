import React, { useState } from "react";
import { connect } from "react-redux";

import * as textActions from "../../actions/textActions";
import Spinner from "../general/spinner";
import Alert from "../general/alert";

const TextForm = props => {
  const [text, setText] = useState("");

  const handleSubmit = event => {
    props.sendText(text);
    event.preventDefault();
  };

  const handleChange = event => setText(event.target.value);

  const showContent = () => {
    if (props.loading) {
      return <Spinner />;
    }
    if (props.error) {
      return <Alert message={props.error} type="danger" />;
    }
    if (props.text) {
      return <Alert message={props.text} type="success" />;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputText">Input text.</label>
        <input
          type="text"
          className="form-control"
          id="inputText"
          required
          value={text}
          onChange={handleChange}
          placeholder="Input text please"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <div className="form-group">
      </div>
      <div className="form-group">
        {showContent()}
      </div>
    </form>
  );
};
export default connect(
  reducers => reducers.textReducer,
  textActions
)(TextForm);
