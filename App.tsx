import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import * as thunk from "redux-thunk";
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { createStore, combineReducers, applyMiddleware, compose } from "redux"; // use for manging app's state
import storeReducer from './store/reducers/reducers.js';




export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  /** combine all reducers  */
  const allReducrs = combineReducers({
    store: storeReducer,
  });
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    allReducrs,
    composeEnhancers(applyMiddleware(thunk.default))
  );


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
