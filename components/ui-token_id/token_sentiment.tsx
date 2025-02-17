"use client";
import GaugeChart from "react-gauge-chart";

interface SentimentMeterProps {
  value: number; // Sentiment score (0 to 1)
}

const SentimentMeter = ({ value }: SentimentMeterProps) => {
  return (
    <div className="flex flex-col justify-center rounded-2xl border border-[#E4E4E4]">
      <h2 className="text-md px-4 md:px-6 py-2 text-[#FFFFFF] font-semibold bg-[#8902F4] rounded-t-2xl text-center">Sentiment Analysis on <span className="font-marvin text-xl">X</span></h2>
      <GaugeChart
        id="sentiment-gauge"
        nrOfLevels={20} // Number of divisions in the gauge
        colors={["#FF0000", "#FFC107", "#00FF00"]} // Red → Yellow → Green
        arcWidth={0.3} // Controls the thickness of the meter
        percent={value} // Value between 0 and 1
        textColor="#ffffff"
        hideText={true}
      />
      <p className="text-center font-marvin text-xl">{(value * 100).toFixed(2)}%</p>
    </div>
  );
};

export default SentimentMeter;