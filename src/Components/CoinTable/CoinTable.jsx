import { useContext, useState } from "react";
import { fetchCoinData } from "../../services/FetchCoinData";
import { useQuery } from "react-query";
import { currencyContext } from "../../context/currencyContext";
import store from "../../zustand/store";
import { Navigate, useNavigate } from "react-router-dom";
import MyLoader from "../PageLoader/PageLoader";
function CoinTable() {
  const navigate=useNavigate();
  const {curr}=store();
   function handleCoinRedirect(id){
      navigate(`/details/${id}`);
  }
  
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(["coins", page,curr], () =>
    fetchCoinData(page, curr),
    {
      staleTime:1000*60*2
    }
  );
  if (isLoading) {
    return  <MyLoader/>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 my-5 w-[80vw] mx-auto">
      <div className="flex items-center justify-center w-full px-4 py-4 font-semibold text-black bg-yellow-400">
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[25%]">Price</div>
        <div className="basis-[20%]">24h change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>

      <div className="flex flex-col w-[80vw]">
        {isLoading && <div>Loading...</div>}
        { data && 
          data.map((coin) => {
            return (
              <div
                key={coin.id}
                className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent"
                onClick={()=> handleCoinRedirect(coin.id)}
              >
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} className="w-full h-full" />
                  </div>

                  <div className="flex flex-col ">
                    <div className="text-2xl">{coin.name}</div>
                    <div className="text-l">{coin.symbol}</div>
                  </div>
                </div>

                <div className="basis-[25%]">
                    {coin.high_24h}
                </div>
                <div className="basis-[20%]">
                    {coin.price_change_24h}
                </div>
                <div className="basis-[20%]">
                    {coin.market_cap}
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex items-center justify-center gap-7">
        <button 
            disabled={page===1}
           onClick={()=>setPage(page-1)} 
           className="text-2xl text-white btn btn-primary btn-wide">
            Prev
        </button>
        <button 
        onClick={()=>setPage(page+1)} 
        className="text-2xl text-white btn btn-secondary btn-wide">
            Next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;
