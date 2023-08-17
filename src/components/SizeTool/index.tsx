import React from "react";
import styles from "./SizeTool.module.scss";
import baseStyles from "../../styles/base/Base.module.scss";

const SizeTool: React.FC = () => {
  const generateListItems = (count: number) => {
    const listItems = [];

    for (let i = 1; i <= count; i++) {
      const id = `размер${i}`;
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
      <h2 className={styles.title}>Размер</h2>
      <ul className={styles.list}>{generateListItems(6)}</ul>
    </div>
  );
};

export default SizeTool;
