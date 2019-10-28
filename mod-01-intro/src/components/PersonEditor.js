import React from "react";

class PersonEditor extends React.Component {
  state = {
    firstName: "Jack"
  };

  render() {
    const { firstName } = this.state;

    return (
      <div>
        <input
          value={firstName}
          onChange={e => {
            this.lastValue = e.target.value;

            // console.log(e);
            this.setState({
              firstName: e.target.value
            });
          }}
        />
      </div>
    );
  }
}

export default PersonEditor;
