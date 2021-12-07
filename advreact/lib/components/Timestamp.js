import React, { useContext } from "react";

import storeProvider from './storeProvider';

class Timestamp extends React.Component {
  static timeDisplay = timestamp => timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (this.timeDisplay(this.props.timestamp) !== this.timeDisplay(nextProps.timestamp));
  // }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('Updating Timestamp');
  }
  render() {
    return (
      <div>
        {this.props.timestampDisplay}
      </div>
    );
  }
}

function extraProps(store, originalProps) {
  return {
    timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp),
  };
}

export default storeProvider(extraProps)(Timestamp);