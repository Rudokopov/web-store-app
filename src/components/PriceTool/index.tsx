import React, { useEffect, useState } from "react";
import styles from "./PriceTool.module.scss";

const PriceTool: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Цена</h2>
      <div className={styles.filterContainer}>
        <div className={styles.inputContainer}>
          <span className={styles.placeholderNumber}>от</span>
          <input
            placeholder="5 500 ₽"
            className={styles.filterContainerInput}
            type="number"
          />
        </div>
        <span className={styles.separate}>&#8212;</span>
        <div className={styles.inputContainer}>
          <span className={styles.placeholderNumber}>от</span>
          <input
            placeholder="5 500 ₽"
            className={styles.filterContainerInput}
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceTool;
