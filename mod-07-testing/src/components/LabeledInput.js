import React from "react";

function LabeledInput({ propName, label, firstName, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input name={propName} value={firstName} onChange={onChange} />
      </label>
    </div>
  );
}

export default LabeledInput;
