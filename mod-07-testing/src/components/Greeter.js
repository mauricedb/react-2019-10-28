import React from "react";
import PropTypes from "prop-types";
import withErrorBoundary from "./withErrorBoundary";

function Greeter({ person }) {
  return <div>Hello {person.firstName}</div>;
}

Greeter.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired
  }).isRequired
};

export default React.memo(withErrorBoundary(Greeter));
