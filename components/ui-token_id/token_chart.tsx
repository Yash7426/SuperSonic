"use client";
import { useEffect, useRef, useState } from "react";
import {
  createChart,
  IChartApi,
  ISeriesApi,
  CandlestickSeriesOptions,
  CandlestickSeries,
} from "lightweight-charts";
import axios from "axios";

interface CandlestickChartProps {
  coinId: string;
}

const CandlestickChart = ({ coinId }: CandlestickChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<IChartApi | null>(null);
  const [candleSeries, setCandleSeries] = useState<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current || !coinId) return;

    const newChart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });

    const newCandleSeries = newChart.addSeries(CandlestickSeries, { upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });

    setChart(newChart);
    setCandleSeries(newCandleSeries);

    const fetchCandlestickData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId.toLocaleLowerCase()}/ohlc`,
          { params: { vs_currency: "usd", days: "30" } }
        );

        console.log(response.data);
        const data = response.data.map((item: any) => ({
          time: item[0] / 1000, // Convert to UNIX timestamp
          open: item[1],
          high: item[2],
          low: item[3],
          close: item[4],
        }));

        newCandleSeries.setData(data);
      } catch (error) {
        console.error(`Error fetching ${coinId} data:`, error);
      }
    };

    fetchCandlestickData();

    return () => {
      newChart.remove();
    };
  }, [coinId]);

  return <div ref={chartContainerRef} className="w-full h-[300px] flex items-center" />;
};

export default CandlestickChart;
