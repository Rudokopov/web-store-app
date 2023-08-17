import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import Header from "./components/Header/Index";
import Main from "./pages/Main";

function App() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
}

export default App;
