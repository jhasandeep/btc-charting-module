"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { fetchHistoricalData } from "../utils/api";
import "./styles.css";

const TradingViewWidget = dynamic(() => import("react-tradingview-widget"), {
  ssr: false,
});

export default function Chart() {
  const [data, setData] = useState([]);
  const [timeFrame, setTimeFrame] = useState("1m");

  useEffect(() => {
    const getData = async () => {
      const historicalData = await fetchHistoricalData(timeFrame);
      setData(historicalData);
    };
    getData();
  }, [timeFrame]);

  return (
    <div style={{ width: "100%" }}>
      <div>
        <button
          onClick={() => setTimeFrame("1m")}
          className={timeFrame === "1m" ? "selected" : "button"}
        >
          1m
        </button>
        <button
          onClick={() => setTimeFrame("5m")}
          className={timeFrame === "5m" ? "selected" : "button"}
        >
          5m
        </button>
        <button
          onClick={() => setTimeFrame("1h")}
          className={timeFrame === "1h" ? "selected" : "button"}
        >
          1h
        </button>
      </div>

      <div style={{ height: "800px", width: "100%" }}>
        {/* Set height and width explicitly */}
        <TradingViewWidget
          symbol="BTCUSD"
          interval={timeFrame === "1m" ? "1" : timeFrame === "5m" ? "5" : "60"}
          timezone="Etc/UTC"
          theme="light"
          style="1"
          locale="en"
          autosize
        />
      </div>
    </div>
  );
}
