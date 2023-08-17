import React from "react";
import styles from "./SizeTool.module.scss";
import baseStyles from "../../styles/base/Base.module.scss";

const SizeTool = () => {
  return (
    <div className={styles.container}>
      <h2>Размер</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <input
            type="checkbox"
            className={baseStyles.customCheckbox}
            id="Размер1"
            name="Размер1"
            value="selected"
          />
          <label htmlFor="Размер1">
            Атрибут <span>3</span>
          </label>
        </li>
        <li className={styles.listItem}>
          <input
            type="checkbox"
            className={baseStyles.customCheckbox}
            id="Размер2"
            name="Размер2"
            value="selected"
          />
          <label htmlFor="Размер2">
            Атрибут <span>3</span>
          </label>
        </li>
        <li className={styles.listItem}>
          <input
            type="checkbox"
            className={baseStyles.customCheckbox}
            id="Размер3"
            name="Размер3"
            value="selected"
          />
          <label htmlFor="Размер3">
            Атрибут <span>3</span>
          </label>
        </li>
        <li className={styles.listItem}>
          <input
            type="checkbox"
            className={baseStyles.customCheckbox}
            id="Размер4"
            name="Размер4"
            value="selected"
          />
          <label htmlFor="Размер4">
            Атрибут <span>3</span>
          </label>
        </li>
        <li className={styles.listItem}>
          <input
            type="checkbox"
            className={baseStyles.customCheckbox}
            id="Размер5"
            name="Размер5"
            value="selected"
          />
          <label htmlFor="Размер5">
            Атрибут <span>3</span>
          </label>
        </li>
        <li className={styles.listItem}>
          <input
            type="checkbox"
            className={baseStyles.customCheckbox}
            id="Размер6"
            name="Размер6"
            value="selected"
          />
          <label htmlFor="Размер6">
            Атрибут <span>3</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default SizeTool;
