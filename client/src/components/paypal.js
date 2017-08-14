import React, { Component } from "react";

class Paypal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email
    };
  }
  render() {
    return (
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="business" value={this.state.email} />

        <input type="hidden" name="cmd" value="_donations" />

        <input type="hidden" name="currency_code" value="USD" />
        <input
          type="image"
          name="submit"
          src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/btn_donate_92x26.png"
          alt="Donate"
        />
        <img
          alt=""
          width="1"
          height="1"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        />
      </form>
    );
  }
}
export default Paypal;
