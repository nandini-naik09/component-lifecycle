import React from "react";
import ReactDOM from "react-dom";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0,
    };
    
    this.setNewValue = this.setNewValue.bind(this);
  }
  setNewValue() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.setNewValue}>Keep Adding</button>
        <Content Number={this.state.data}></Content>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.Number}</h3>
      </div>
    );
  }
}

ReactDOM.render(<Lifecycle />, document.getElementById("root"));

setTimeout(() => {
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
},10000);
