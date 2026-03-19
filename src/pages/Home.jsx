import { Link } from "react-router-dom";

export default function Home() {
  const decades = ["1970s", "1980s"];

  return (
    <div>
      <h2>Select a Decade</h2>

      {decades.map((d) => (
        <div key={d}>
          <Link to={`/decade/${d}`}>{d}</Link>
        </div>
      ))}
    </div>
  );
}