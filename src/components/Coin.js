import React from 'react';

// Style
import styles from './Coin.module.css'

const Coin = (props) => {

    const { image, name, symbol, price, priceChange, marketCap } = props

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='icon' />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            {/* Shows up to 2 decimal places */}
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange}</span>
            <span className={styles.currentPrice}><span>Current Price:</span> ${price.toLocaleString()}</span>
            {/* Separates the digits from all three digits */}
            <span className={styles.marketCap}><span>Market Cap:</span> ${marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;