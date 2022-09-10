import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';

const store = configureStore({
    reducer: {
        inventory: reducers
    }
});

export default store;