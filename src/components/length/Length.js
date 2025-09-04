import React from "react";

class Length extends React.Component {
  constructor(props) {
    super(props);
    this.state = { length: 10 };
  }

  increase = () => {
    this.setState((prev) => ({ length: prev.length + 10 }));
  };

  reset = () => {
    this.setState({ length: 10 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.reset}>Reset</button>

        <input type="text" size={this.state.length} />
      </div>
    );
  }
}

export default Length;
