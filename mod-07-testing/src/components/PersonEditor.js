import React, { Component } from "react";
import PersonEditorPresentation from "./PersonEditorPresentation";

class PersonEditor extends Component {
  state = { firstName: "", lastName: "" };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <PersonEditorPresentation {...this.state} onChange={this.onChange} />
    );
  }
}

export default PersonEditor;
