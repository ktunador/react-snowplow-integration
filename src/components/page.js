import { Link } from "./link";

export function Page({ match, location }) {
  return (
    <div>
      <h1>Page {match.params.name}</h1>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
