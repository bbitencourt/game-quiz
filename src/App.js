import React from "react";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/global";

import { PersistGate } from "redux-persist/integration/react";

import "./config/ReactotronConfig";
import { store, persistor } from "./store";

import history from "./history";

import Routes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Routes history={history} />
      </PersistGate>
    </Provider>
  );
};

export default App;
