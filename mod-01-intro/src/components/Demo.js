import React from "react";

class Demo extends React.Component {
  render() {
    const { firstName, lastName } = this.props;

    return (
      <div>
        Hello {firstName} {lastName} from demo component
      </div>
    );
  }
}

export default Demo;
