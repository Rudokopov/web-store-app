import React, { useEffect, useState } from "react";
import LogoIcon from "../../images/Logo.png";
import styles from "./Header.module.scss";
import { useResize } from "../../utils/useResize";

import leftArrowIcon from "../../images/icons/leftArrowIcon.svg";
import crossIcon from "../../images/icons/crossIcon.svg";

const Header: React.FC = () => {
  // Кастомным хуком проверяю размер окна
  const { isScreenXl } = useResize();
  const [searchValue, setSearchValue] = useState<string>("");
  const [isClearButton, setClearButton] = useState(false);

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  const clearSearchInput = () => {
    setSearchValue("");
  };

  useEffect(() => {
    if (searchValue) {
      setClearButton(true);
    } else {
      setClearButton(false);
    }
  }, [searchValue]);

  return (
    <header className={styles.container}>
      {isScreenXl ? (
        <>
          <img className={styles.logo} src={LogoIcon} alt="" />
          <button className={styles.button}>Каталог</button>
          <input
            className={styles.searchInput}
            placeholder="Поиск по 100 000 товаров"
          />
          <ul className={styles.list}>
            <li className={styles.listItem}>Информация о компании</li>
            <li className={styles.listItem}>Контакты</li>
            <li className={styles.listItem}>Полезные ссылки</li>
          </ul>
        </>
      ) : (
        <div className={styles.mobileContainer}>
          <button className={styles.mobileBackButton} type="button">
            <img src={leftArrowIcon} alt="Назад" />
          </button>
          <div className={styles.mobileSearchContainer}>
            <input
              value={searchValue || ""}
              onChange={onChangeInput}
              placeholder="Поиск по 100 000 товаров"
              className={styles.searchInputMobile}
            />
            <div className={styles.mobileSearchTools}>
              {isClearButton && (
                <button
                  onClick={clearSearchInput}
                  className={styles.mobileClearButton}
                  type="button"
                >
                  <img src={crossIcon} alt="Очистить" />
                </button>
              )}

              <button className={styles.mobileSearchButton} type="button">
                Найти
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
