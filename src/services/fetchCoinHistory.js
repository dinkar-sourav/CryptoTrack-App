import axios from 'axios';

export async function fetchCoinHistory(id,interval,days=7,currency='usd'){
    const perPage=10;
    try{
        const response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`)
        // console.log(response)
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}