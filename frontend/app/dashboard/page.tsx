import Nav from "../../components/Nav";
import MetricCard from "../../components/MetricCard";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <main style={{ padding:40 }}>
        <MetricCard label="Posts Today" value="3" />
        <MetricCard label="Leads" value="1" />
      </main>
    </>
  );
}
