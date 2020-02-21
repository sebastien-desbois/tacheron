import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import AppPanel from '../components/AppPanel';
import { TacheronStoreType, createTacheronStore } from '../store/Store'

function TacheronStore() {
    const [storeInit, setStoreInit] = useState(true)
    const [store, setStore] = useState<TacheronStoreType | null>(null);
    useEffect(() => {
        if (storeInit) {
            console.log('Creating the store');
            setStore(createTacheronStore());
            setStoreInit(false);
        }

    }, [storeInit, setStoreInit, setStore])
    if (null === store) {
        return <span>Loading ...</span>
    } else {
        return (
            <Provider store={store}>
                <AppPanel />
            </Provider>
        );
    }
}
TacheronStore.displayName = 'TacheronStore';
export default TacheronStore;
