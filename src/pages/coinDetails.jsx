import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import parse from 'html-react-parser'
import store from "../zustand/store";
import MyLoader from "../Components/PageLoader/PageLoader";
function CoinDetails(){
    const {curr}=store();
    const {coinId}=useParams();
    const {isError,isLoading,data}=useQuery(["coins",coinId],()=>fetchCoinDetails(coinId),{
        cacheTime: 1000*60*2,
        staleTime:1000*60*2,
    })
    
    if(isLoading){
        return <MyLoader/>
    }
    if(isError){
        return <div>Error :Something went</div>
    }
    
    return(
       <div className="flex flex-col md:flex-row">
          <div
            className="flex flex-col items-center w-full mt-6 border-r-2 border-gray-500 md:w-1/3 md:mt-0"          
          >
            <img 
            src={data ?.image?.large} 
            alt={data?.name} 
            className="mb-5 h-52 "
            />
            <h1
                className="mb-5 text-4xl font-bold"
            >
                {data?.name}
            </h1>

            <p
                className="w-full px-6 py-4 text-justify"
            >
                
                {parse(data?.description?.en)}
            </p>
            
            <div
                className="flex flex-col w-full md:flex-row md:justify-around"
            >
                <div 
                 className="flex items-center mb-4 md:mb-0"
                >
                    <h2 className="text-xl font-bold">
                        Rank
                    </h2>
                    <span className="ml-3 text-xl">
                        {data?.market_cap_rank}
                    </span>
                </div>
                
                <div className="flex items-center mb-4 md:mb-0">
                    <h2 className="text-xl font-bold text-yellow-400">
                           Current Price
                    </h2>
                    <span className="ml-3 text-xl">
                            {data?.market_data.current_price[curr]}
                    </span>
                    
                </div>
                
            </div>
          </div>
          <div
           className="w-full p-6 md:w-2/3"
          >
             Coin Information
          </div>
       </div>
    )
}

export default CoinDetails;