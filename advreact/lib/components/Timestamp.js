import React, { useContext } from "react";

import storeProvider from './storeProvider';

class Timestamp extends React.Component {
  timeDisplay = timestamp => timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  shouldComponentUpdate(nextProps, nextState) {
    return (this.timeDisplay(this.props.timestamp) !== this.timeDisplay(nextProps.timestamp));
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('Updating Timestamp');
  }
  render() {
    return (
      <div>
        {this.props.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
      </div>
    );
  }
}

function extraProps(store, originalProps) {
  return {
    timestamp: store.getState().timestamp,
  };
}

export default storeProvider(extraProps)(Timestamp);