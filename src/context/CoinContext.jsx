import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: 'usd',
        symbol: '$'
    });
    const [error, setError] = useState(null); // error handling


    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json', 
                'x-cg-demo-api-key': 'CG-uir9xqGhMTebKr65DsWdfnyr'
            },
          };

          try{
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
                options
            );

            if (!response.ok) {
                // Sprawdzamy status odpowiedzi
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            setAllCoin(data);
            setError(null); // Resetujemy błąd, jeśli odpowiedź jest poprawna
          } catch (err) {
            // Obsługuje błąd, jeśli fetch się nie powiedzie
            console.error('Fetch error:', err);
            setError('Failed to fetch data. Please try again later.');
        }
    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);


    const contextValue = {
        allCoin,
        currency,
        setCurrency,
        error,
    };



    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;