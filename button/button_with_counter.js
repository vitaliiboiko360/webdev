'use strict';

//const e = React.createElement;

class ButtonWithCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false, counter: 0 };
    }
    
    render() {
        return e(
            'button',
            { onClick: () => this.setState({clicked: true, counter: this.state.counter + 1}) },
            (this.state.counter == 0) ? 'TEST' : 'TEST' + this.state.counter
        );
    }
}

const buttonWithCounterContainer = document.querySelector('#button_with_counter_container');
ReactDOM.render(e(ButtonWithCounter), buttonWithCounterContainer);