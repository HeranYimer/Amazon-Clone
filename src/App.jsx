import React from "react";
import "./App.css";
import Routing from "./Router";
import { DataProvider } from "./Components/DataProvider/DataProvider";
import { initialState, reducer } from "./Utility/reducer";

function App() {
  return (
    <DataProvider reducer={reducer} initialState={initialState}>
      <Routing />
    </DataProvider>
  );
}

export default App;
