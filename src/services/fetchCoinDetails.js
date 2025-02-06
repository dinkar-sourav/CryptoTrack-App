import axios from 'axios';

export async function fetchCoinDetails(id){
    const perPage=10;
    try{
        const response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        // console.log(response)
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}