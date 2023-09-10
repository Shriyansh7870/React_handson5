import { Component } from "react";

const subjects = (STUDENT) => {
  class Subject extends Component {
    render() {
      return (
        <div>
          <STUDENT hocsub="Mern"></STUDENT>
        </div>
      );
    }
  }
  return Subject;
};
export default subjects;
