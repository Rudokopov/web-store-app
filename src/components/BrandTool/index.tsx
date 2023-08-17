import React from "react";
import styles from "./BrandTool.module.scss";
import baseStyles from "../../styles/base/Base.module.scss";

const BrandTool: React.FC = () => {
  const generateListItems = (count: number) => {
    const listItems = [];

    for (let i = 1; i <= count; i++) {
      const id = `атрибут${i}`;
      listItems.push(
        <li key={id} className={styles.listItem}>
          <input
            type="checkbox"
            className={baseStyles.customCheckbox}
            id={id}
            name={id}
            value="selected"
          />
          <label htmlFor={id}>
            Атрибут <span className={styles.count}>3</span>
          </label>
        </li>
      );
    }

    return listItems;
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Бренд</h2>
        <button className={styles.button} type="button">
          Очистить
        </button>
      </div>
      <input placeholder="Поиск" className={styles.searchInput} />
      <ul className={styles.list}>{generateListItems(10)}</ul>
    </div>
  );
};

export default BrandTool;
