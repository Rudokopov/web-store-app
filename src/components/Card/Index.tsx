import React from "react";
import styles from "./Card.module.scss";
import promotionFireIcon from "../../images/icons/promotionFireIcon.svg";

type CardProps = {
  image: string;
  isPromotion?: boolean;
  discount?: number;
  brand: string;
  description: string;
  price: string;
  oldPrice?: string;
  isEmpty?: boolean;
};

const Card: React.FC<CardProps> = (props) => {
  const {
    image,
    isPromotion,
    discount,
    brand,
    description,
    price,
    oldPrice,
    isEmpty,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <img className={styles.cardImage} src={image} alt={brand} />
        {isPromotion && (
          <span className={styles.promotionBanner}>
            Хит продаж{" "}
            <img
              className={styles.promotionFireIcon}
              src={promotionFireIcon}
              alt="Хит"
            />
          </span>
        )}
        {discount && <div className={styles.discountBanner}>25%</div>}
      </div>
      <div>
        <h2 className={styles.title}>{brand}</h2>
        <p className={styles.description}>{description}</p>
        {!isEmpty ? (
          <>
            <div className={styles.priceContainer}>
              <h3 className={styles.price}>{price}</h3>
              <p className={styles.oldPrice}>{oldPrice}</p>
            </div>
            <button className={styles.button} type="button">
              Купить
            </button>
          </>
        ) : (
          <button className={styles.feedBackButton}>
            Сообщить о поступлении
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
