import { useState } from "react";
import store from "../zustand/store";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../services/fetchCoinHistory";
function useFetchCoinHistory(coinId){
    const [days,setCoinDays]=useState(7);
    const [interval,setCoinInterval]=useState('daily')
    const {curr}=store();
    const {data,isLoading,isError,}=useQuery(['coinHistory',curr,days,interval],
        ()=>fetchCoinHistory(coinId,interval,days,curr),
        {
            cacheTime:1000*60*2,
            staleTime:1000*60*2,
        }
    )

    return(
        [data,
        isLoading,
        isError,
        setCoinDays,
        setCoinInterval,
        days,
        curr]
    )
}

export default useFetchCoinHistory;