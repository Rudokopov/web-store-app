import React, { useState } from "react";
import styles from "./CategoriesTool.module.scss";

const CategoriesTool: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "Название категории 1",
    "Название категории 2",
    "Название категории 3",
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Название категории <span className={styles.count}>3</span>
      </h2>
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`${styles.listItem} ${
              selectedCategory === category ? styles.selected : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category} <span className={styles.count}>3</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesTool;
