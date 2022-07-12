import React    from "react";
import template from "./MyMom.jsx";

class MyMom extends React.Component {
  render() {
    return template.call(this);
  }
}

export default MyMom;
