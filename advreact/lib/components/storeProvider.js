import React from 'react';
import PropTypes from "prop-types";
import StoreContext from './StoreContext';

const storeProvider = (extraProps = () => ({})) => (Component) => {
  return class extends React.PureComponent {
      static contextType = StoreContext;
      static displayName = `${Component.name}Container`;
      onStoreChange = () => {
        if (this.subscriptionId) {
          this.forceUpdate();
        }
      }
      componentDidMount() {
        this.subscriptionId = this.context.subscribe(this.onStoreChange);
      }
      componentWillUnmount() {
        this.context.unsubscribe(this.subscriptionId);
        this.subscriptionId = null;
      }
      render() {
          return (<Component 
            {...this.props} 
            {...extraProps(this.context, this.props)} 
            store={this.context} />);
      }
  };
}
// const storeProvider = (Component) => {
//   const WithStore = (props) => {
//     const storeContext = useContext(StoreContext);
//     return <Component {...props} store={storeContext} />;
//   }

//   WithStore.contextTypes = {
//     store: PropTypes.object,
//   };

//   WithStore.displayName = `${Component.name}Container`;

//   return WithStore;
// };

export default storeProvider;