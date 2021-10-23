'use strict';

const e = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'You clicked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      'Click me'
    );
  }
}

const domContainer = document.querySelector('#button_container');
ReactDOM.render(e(Button), domContainer);