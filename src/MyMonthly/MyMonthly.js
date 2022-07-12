import React    from "react";
import template from "./MyMonthly.jsx";

class MyMonthly extends React.Component {
  render() {
    return template.call(this);
  }
}

export default MyMonthly;
