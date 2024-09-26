import { useGlobalState } from "../context/GlobalState";

function Balance () {
  const data = useGlobalState();

  return (
    <div>
      <h1>Este es el balance</h1>
    <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default Balance;
