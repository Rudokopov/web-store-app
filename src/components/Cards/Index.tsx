import React from "react";
import styles from "./Cards.module.scss";
import data from "../../utils/products.json";
import Card from "../Card/Index";

const Cards: React.FC = () => {
  return (
    <div className={styles.container}>
      {data.map((product, i) => (
        <Card key={i} {...product} />
      ))}
    </div>
  );
};

export default Cards;
