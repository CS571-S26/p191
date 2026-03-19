import { useParams } from "react-router-dom";

export default function DecadePage() {
  const { decade } = useParams();

  return <h2>{decade} Movies</h2>;
}