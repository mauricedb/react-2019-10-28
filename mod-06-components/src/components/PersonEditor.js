import React, { Component } from "react";
import PersonEditorPresation from "./PersonEditorPresation";

class PersonEditor extends Component {
  state = { firstName: "", lastName: "" };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return <PersonEditorPresation {...this.state} onChange={this.onChange} />;
  }
}

export default PersonEditor;
