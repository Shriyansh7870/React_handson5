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
        <h1>PureComponent</h1>
        <h2 className="heading2">{this.state.name}</h2>
        <p>
          <button onClick={() => this.updateData()}>Update</button>
        </p>
      </div>
    );
  }
}

export default Pure;
