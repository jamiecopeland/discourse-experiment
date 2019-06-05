var React = require("react");
var ReactDOM = require("react-dom");

const node = document.getElementById("react-root-banner");

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<MyComponent />, node);
