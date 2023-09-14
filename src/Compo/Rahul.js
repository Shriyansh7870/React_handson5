import React, { Component } from "react";
import subjects from "./Hoc";
class Rahul extends Component {
  state = {
    marks: 0,
  };
  marksChanged = () => {
    this.setState({ marks: this.state.marks + 2 });
  };
  render() {
    return (
      <div>
        <h2 onMouseOver={this.marksChanged}>
          Rahul's Marks:{this.state.marks},{this.props.hocsub}
        </h2>
      </div>
    );
  }
}
export default subjects(Rahul);
