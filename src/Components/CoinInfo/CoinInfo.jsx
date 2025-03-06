import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import { CategoryScale, elements } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
function CoinInfo({ historicData, setDays, setInterval, days, currency }) {
  if (!historicData) {
    return <Alert message="No Data available" type="info" />;
  }
  function handleDayChange(e){
    if(e.target.value==1) setInterval?.('')
    else setInterval?.('daily');
    setDays?.(e.target.value)
  }

  const chartDays = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "7 Days",
      value: 7,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "90 Days",
      value: 90,
    },
    {
      label: "365 Days",
      value: 365,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full mt-6 h-[70vh]">
      <Line
        data={{
          labels: historicData.prices.map((coinPrice) => {
            //converting unix timestamp to date
            let date = new Date(coinPrice[0]);
            let time =
              date?.getHours() > 12
                ? `${date?.getHours() - 12}:${date?.getMinutes()}PM`
                : `${date.getHours()}:${date.getMinutes()}AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              label: `price (past ${days} ${
                days === 1 ? "Day" : "Days"
              }) in ${currency?.toUpperCase()}`,

              data: historicData.prices.map((coinPrice) => coinPrice[1]),
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
      <div className="flex justify-center w-full mt-5">
        <select className="w-full max-w-xs select select-primary" onChange={handleDayChange}>
            {chartDays.map((day,index)=>{
                return(
                <option selcted={days===day.value} key={index} value={day.value}
                >{day.label}</option>
                )
            })}
        </select>
      </div>
    </div>
  );
}

export default CoinInfo;
