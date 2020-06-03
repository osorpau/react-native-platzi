import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducer/videos-reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist:['selectedMovie']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor }
