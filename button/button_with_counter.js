'use strict';

//const e = React.createElement;

class ButtonWithCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.counter = 0;
    }
    
    render() {
        return e(
            'button',
            { onClick: function() {
                this.setState({ clicked: true });
            } },
            'TEST'
        );
    }
}

const buttonWithCounterContainer = document.querySelector('#button_with_counter_container');
ReactDOM.render(e(ButtonWithCounter), buttonWithCounterContainer);