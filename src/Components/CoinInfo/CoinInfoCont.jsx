import CoinInfo from "./CoinInfo";
import MyLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory";
function CoinInfoCont({coinId}){
    const [data,
        isLoading,
        isError,
        setCoinDays,
        setCoinInterval,
        days,
        curr]=useFetchCoinHistory(coinId);
    if(isLoading){
        return <MyLoader/>
    }
    if(isError){
        return <Alert message="error fetching data" type="error" />
    }
    return(
        <>
            <CoinInfo
              historicData={data}
              setDays={setCoinDays}
              setInterval={setCoinInterval}
              days={days}
              currency={curr}
            />
        </>
    )
}

export default CoinInfoCont;