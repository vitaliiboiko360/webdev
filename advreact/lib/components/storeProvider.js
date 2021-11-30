import React from 'react';
import PropTypes from "prop-types";
import { useContext } from 'react';
import StoreContext from './StoreContext';

const storeProvider = (Component) => {
    const WithStore = (props) => {
        const storeContext = useContext(StoreContext);
        return <Component {...props} store={storeContext} />;
    }
  
    WithStore.contextTypes = {
        store: PropTypes.object,
    };
  
    return WithStore;
  };

export default storeProvider;