import { useQuery } from "react-query";
import store from "../zustand/store";
import { fetchCoinDetails } from "../services/fetchCoinDetails";

function useFetchDetails(coinId){
    const {curr}=store();
    const {isError,isLoading,data}=useQuery(["coins",coinId],()=>fetchCoinDetails(coinId),{
        cacheTime: 1000*60*2,
        staleTime:1000*60*2,
    })
    return {
        curr,isError,isLoading,data
    }
}
export default useFetchDetails;