import React, { Component } from "react";
import subjects from "./Hoc";

class Shriyansh extends Component {
  state = {
    marks: 0,
  };

  marksIncrement = () => {
    this.setState({ marks: this.state.marks + 1 });
  };
  render() {
    return (
      <div>
        <h1 className="heading">HOC EXAMPLE</h1>
        <h2 onMouseOver={this.marksIncrement}>
          Shriyansh's marks:{this.state.marks},{this.props.hocsub}
        </h2>
      </div>
    );
  }
}
export default subjects(Shriyansh);
