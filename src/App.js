import { useEffect, useState } from "react";
import github from "./db";
import githubQuery from "./Query";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(github.baseURL, {
          method: "POST",
          headers: github.headers,
          body: JSON.stringify(githubQuery),
        });
        const data = await res.json();

        setUserName(data.data?.viewer?.name ?? "");
      } catch (e) {
        console.log("silent error handler");
      }
    })();
  }, []);
  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"> Repos</i>
        <p>User name: {userName}</p>
      </h1>
    </div>
  );
}

export default App;
