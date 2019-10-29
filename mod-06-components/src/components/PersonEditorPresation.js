import React from "react";
import LabeledInput from "./LabeledInput";

function PersonEditorPresation({ firstName, lastName, onChange }) {
  return (
    <div>
      <LabeledInput
        propName="firstName"
        label="Firstname:"
        value={firstName}
        onChange={onChange}
      />
      <LabeledInput
        propName="lastName"
        label="Lastname:"
        value={lastName}
        onChange={onChange}
      />
    </div>
  );
}

export default PersonEditorPresation;
