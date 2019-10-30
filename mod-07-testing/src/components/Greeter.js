import React from "react";
import PropTypes from "prop-types";
import withErrorBoundary from "./withErrorBoundary";

function Greeter({ person }) {
  return (
    <div>
      <div>Hello {person.firstName}</div>
      <div>Hello {person.firstName}</div>
    </div>
  );
}

Greeter.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string
  })
};

export default React.memo(withErrorBoundary(Greeter));
