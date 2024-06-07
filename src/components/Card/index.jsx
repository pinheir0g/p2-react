import React from "react";
import styles from "./styles.module.css";
import { BuyButton } from "../Button";
import { FaEthereum } from "react-icons/fa";
import { ContextoCarrinho } from './../../contexts/CarrinhoContext';



export const Card = ({ cardProps }) => {
  const { adicionarItemCarrinho } = React.useContext(ContextoCarrinho)
  
  const click = () => {
    adicionarItemCarrinho({
      title: cardProps.title,
      price: cardProps.price,
      quantidade: 1,
      img: cardProps.img
    })
  }

  const isLendario = cardProps.raridade != 'comum';

  return (
    <section className={isLendario ? styles.cardLendario: styles.card}>
      <div className={isLendario ? styles.contentLendario: styles.content}>
        <img src={cardProps.img} alt="" className={styles.image} />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.info}>
          <p>{cardProps.title} </p>
          <p>{cardProps.price} { <FaEthereum color="c0c0c0"/>} </p>
        </div>
        <div>
          <BuyButton  title = {"Buy"} onClick={click}  />
        </div>
      </div>
    </section>
  )
};