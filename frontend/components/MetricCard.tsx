export default function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ border:"1px solid #333", padding:20 }}>
      <h3>{label}</h3>
      <strong>{value}</strong>
    </div>
  );
}
