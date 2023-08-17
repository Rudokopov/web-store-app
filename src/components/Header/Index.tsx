import React from "react";
import LogoIcon from "../../images/Logo.png";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={LogoIcon} alt="" />
      <button className={styles.button}>Каталог</button>
      <input
        className={styles.searchInput}
        placeholder="Поиск по 100 000 товаров "
      />
      <ul className={styles.list}>
        <li className={styles.listItem}>Информация о компании</li>
        <li className={styles.listItem}>Контакты</li>
        <li className={styles.listItem}>Полезные ссылки</li>
      </ul>
    </header>
  );
};

export default Header;
