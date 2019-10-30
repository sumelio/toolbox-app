import React, { Component } from "react";
import { connect } from 'react-redux'
import * as textActions from '../../actions/textActions';

class TextForm extends Component {
   
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
   handleSubmit = event => {
     this.props.sendText(this.state.value);
     event.preventDefault();
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label htmlFor="inputText">Input text</label>
            <input
              type="text"
              className="form-control"
              id="inputText"
              required
              value={this.state.value} onChange={this.handleChange}
              placeholder="Input text please">
              
              </input>
        </div>
          <button
            type="submit"
          className="btn btn-primary">Submit</button>
        <div className="form-group">
        <label>{this.props.text}</label>
      </div>

      </form>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.textReducer
}
export default  connect(mapStateToProps, textActions)(TextForm);
