import React, { Component } from "react";

class PersonEditor extends Component {
  render() {
    return (
      <div>
        <div>
          <label>
            Firstname:
            <input name="firstName" />
          </label>
        </div>
        <div>
          <label>
            Lastname:
            <input name="lastName" />
          </label>
        </div>
      </div>
    );
  }
}

export default PersonEditor;
