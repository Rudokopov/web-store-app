import React from "react";
import styles from "./CategoriesTool.module.scss";

const CategoriesTool: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Название категории <span className={styles.count}>3</span>
      </h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Название категории <span className={styles.count}>3</span>
        </li>
        <li className={styles.listItem}>
          Название категории <span className={styles.count}>3</span>
        </li>
        <li className={styles.listItem}>
          Название категории <span className={styles.count}>3</span>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesTool;
