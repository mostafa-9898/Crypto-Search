import React, { useEffect, useState } from 'react';

// API
import { getCoin } from '../services/api';

// Component
import Coin from './Coin';
import Loading from 'react-loading';

// Style
import styles from './Landing.module.css'

const Landing = () => {

    const [coin, setCoin] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin()
            setCoin(data)
        }

        fetchAPI()
    }, [])

    const searchHandler = event => {
        setSearch(event.target.value)
        // console.log(search)
    }

    // Compares what we wrote in the input with all the coins
    const searchCoins = coin.filter(item => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item
        } else if (item.symbol.toLowerCase().includes(search.toLowerCase())) {
            return item
        }
    })

    return (
        <div className={styles.container}>
            <input className={styles.input} type='search' placeholder='Search' value={search} onChange={searchHandler} />

            {coin.length ?
                <div className={styles.coinContainer}>
                    {searchCoins.map(item => <Coin
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        symbol={item.symbol}
                        price={item.current_price}
                        marketCap={item.market_cap}
                        priceChange={item.price_change_percentage_24h} />)}
                </div>

                : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }} >
                    <Loading type='spin' color='black' />
                </div>}

        </div>
    );
};

export default Landing;