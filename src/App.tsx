import React, { useContext, useState } from "react";
import { UserContext } from "./index";
import "./App.css";
import { useGiphyApi } from "./utils/GiphyApiHook";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const { results, loading, error } = useGiphyApi(query);
  const userName: string = useContext(UserContext);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <h2>Async react hooks by {userName}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      {error && <div>{error}</div>}
      {loading && <div>Loading giphy....</div>}
      {results.map((item: string) => (
        <video autoPlay loop src={item} key={item} />
      ))}
    </div>
  );
};

export default App;
