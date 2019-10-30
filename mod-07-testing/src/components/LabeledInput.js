import React from "react";

function LabeledInput({ propName, label, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input name={propName} value={value} onChange={onChange} />
      </label>
    </div>
  );
}

export default LabeledInput;
