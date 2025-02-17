"use client";
import GaugeChart from "react-gauge-chart";

interface SentimentMeterProps {
  value: number; // Sentiment score (0 to 1)
}

const SentimentMeter = ({ value }: SentimentMeterProps) => {
  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg border border-gray-700">
      <h2 className="text-lg font-semibold">Sentiment Analysis</h2>
      <GaugeChart
        id="sentiment-gauge"
        nrOfLevels={20} // Number of divisions in the gauge
        colors={["#FF0000", "#FFC107", "#00FF00"]} // Red → Yellow → Green
        arcWidth={0.3} // Controls the thickness of the meter
        percent={value} // Value between 0 and 1
        textColor="#ffffff"
      />
      <p className="text-center text-lg mt-2">{(value * 100).toFixed(2)}%</p>
    </div>
  );
};

export default SentimentMeter;