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
        <h2>Expalin Hoc With Real Example?</h2>
        <p>
          Ans:In React, a Higher-Order Component HOC is a design pattern used
          for reusing component logic. It's not a built-in component like div or
          button, but rather a function that takes a component and returns a new
          component with some enhanced functionality. HOCs are a way to share
          behavior among multiple components without duplicating code.
        </p>
        <p>Example:</p>
        <p>
          In this code we have implemented the hoc component in which I haave
          made the on hover where <br></br> when we hover on the the shriyansh
          Marks it increase the count . The Mern made in Hoc Component and use
          in different Component where we use.
        </p>
        <h2 onMouseOver={this.marksIncrement}>
          Shriyansh's marks:{this.state.marks},{this.props.hocsub}
        </h2>
      </div>
    );
  }
}
export default subjects(Shriyansh);
