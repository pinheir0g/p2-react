import React from "react";
import styles from './styles.module.css';



export const BuyButton = ({title, ...rest}) => {
    return <button  className={styles.buyButton} {...rest}>
        {title}
    </button>
}