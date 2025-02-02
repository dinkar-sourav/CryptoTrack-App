import axios from 'axios';

export async function fetchCoinData(page=1,currency='usd'){
    const perPage=10;
    try{
        const response=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`)
        // console.log(response)
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}