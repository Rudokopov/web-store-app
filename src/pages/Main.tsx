import React from "react";
import Header from "../components/Header/Index";
import styles from "./Main.module.scss";
import ToolMenu from "../components/ToolMenu";
import Cards from "../components/Cards/Index";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <ToolMenu />
        <Cards />
      </section>
    </>
  );
};

export default Main;
