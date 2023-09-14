import React, { PureComponent } from "react";

export class Pure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "WELCOME",
    };
  }
  updateData() {
    this.setState({
      name: "PrepByte",
    });
  }
  render() {
    return (
      <div>
        <h1 className="heading">PureComponent</h1>
        <h2>Explain The Pure Componet in React with Real Example?</h2>
        <p>
          Ans:In React, a PureComponent is a class component that inherits from
          React's Component class but comes with optimizations for<br></br>
          performance. A PureComponent automatically implements the
          shouldComponentUpdate method with a shallow comparison of the
          component's props and state. If the props or state haven't changed, a
          PureComponent prevents unnecessary re-renders, improving performance
          in certain situations.
        </p>
        <p>Example</p>
        <p>
          When you initially render the Pure component, it displays "WELCOME" as
          the text. Clicking the "Update Name" button <br></br>will change the
          displayed text to "PrepByte" by updating the name state. Importantly,
          the Pure component leverages PureComponent to optimize rendering,
          <br></br> ensuring that unnecessary re-renders are avoided when the
          state hasn't changed, thereby improving performance in React
          applications.
        </p>
        <h2 className=" ">{this.state.name}</h2>
        <p>
          <button onClick={() => this.updateData()}>Update</button>
        </p>
      </div>
    );
  }
}

export default Pure;
