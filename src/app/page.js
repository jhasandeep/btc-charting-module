import Chart from "./components/chart";
import MockTrade from "./components/mockTrade";
import styles from "./styles/Chart.module.css";

export default function Home() {
  return (
    <div className={styles.chartContainer}>
      <h1>BTC-USD Chart with Candlestick Data</h1>

      <Chart />

      <MockTrade />
    </div>
  );
}
