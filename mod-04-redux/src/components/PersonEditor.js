import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePerson } from "../store/actions";

class PersonEditor extends Component {
  render() {
    const { firstName, lastName, updateFirstName, updateLastName } = this.props;

    return (
      <div>
        <div>
          <label>
            Firstname:
            <input
              name="firstName"
              value={firstName}
              onChange={e => {
                updateFirstName(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Lastname:
            <input
              name="lastName"
              value={lastName}
              onChange={e => {
                updateLastName(e.target.value);
              }}
            />
          </label>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateFirstName: value => dispatch(updatePerson("firstName", value)),
    updateLastName: value => dispatch(updatePerson("lastName", value))
  };
}

function mapStateToProps(state) {
  return {
    firstName: state.firstName,
    lastName: state.lastName
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonEditor);
