import React, { useContext } from "react";

import storeProvider from './storeProvider';

class Timestamp extends React.Component {
  timeDisplay = timestamp => timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.timeDisplay(this.props.store.getState().timestamp));
  //   console.log(this.timeDisplay(nextProps.store.getState().timestamp));
  //   return (this.timeDisplay(this.props.store.getState().timestamp) !== this.timeDisplay(nextProps.store.getState().timestamp));
  // }
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