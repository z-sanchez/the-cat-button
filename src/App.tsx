import { useQuery } from "@apollo/client";
import { useState } from "react";
import "./App.css";
import { GET_ALL_CATS } from "./connectors/cats";

type Cat = {
  id: number;
  name: string;
  imageSrc: string;
};

function App() {
  const [results, setResults] = useState<Cat[]>([]);

  useQuery(GET_ALL_CATS, {
    onCompleted: (data) => {
      setResults(data.getCats as Cat[]);
    },
  });

  return (
    <>
      <div className="w-full flex justify-center mt-auto">
        {results.map((cat) => {
          return (
            <div>
              <img src={cat.imageSrc} />
              <p>{cat.name}</p>
            </div>
          );
        })}
      </div>
      <button>Press for New Cat!</button>
    </>
  );
}

export default App;
