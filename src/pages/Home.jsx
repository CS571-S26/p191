import { Link } from "react-router-dom";

export default function Home() {
  const decades = [
    "1970s",
    "1980s",
    "1990s",
    "2000s",
    "2010s",
    "2020s"
  ];

  return (
    <div>
      <h2>Explore Influential Films & TV</h2>

      <p>
        Browse decades of culturally impactful movies and TV shows.
        Discover legacy content and build your personal favorites list.
      </p>

      <h3>Select a Decade</h3>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {decades.map((d) => (
          <Link
            key={d}
            to={`/decade/${d}`}
            style={{
              padding: "10px",
              border: "1px solid black",
              borderRadius: "8px",
              textDecoration: "none"
            }}
          >
            {d}
          </Link>
        ))}
      </div>
    </div>
  );
}