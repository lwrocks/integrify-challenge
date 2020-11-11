import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggle = () => {
    let { toggle } = this.state;
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        {""}
        <button onClick={this.toggle}>
          Show
          <Drawer
            open={this.state.open}
            onRequestClose={this.toggle}
            onDrag={() => {}}
            onOpen={() => {}}
            allowClose={true}
            modalElementClass="modal"
            containerElementClass="my-shade"
            parentElement={document.body}
            direction="bottom"
          >
            <div>{this.props.user.email}</div>
            <div>{JSON.stringify(this.props.user)}</div>
          </Drawer>
        </button>
      </div>
    );
  }
}

export default Button;
