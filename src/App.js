import React, { useState } from "react";
import "./App.css";
import StackedBarChart from "./StackedBarChart";

const data = [
  {
    year: 1980,
    ava: 10,
    ban: 20,
    egg: 30,
  },
  {
    year: 1990,
    ava: 15,
    ban: 25,
    egg: 35,
  },
  {
    year: 2000,
    ava: 18,
    ban: 28,
    egg: 38,
  },
  {
    year: 2010,
    ava: 20,
    ban: 30,
    egg: 40,
  },
  {
    year: 2010,
    ava: 25,
    ban: 35,
    egg: 45,
  },
];

const allKeys = ["ava", "ban", "egg"];

const colors = {
    ava: "green",
    ban: "orange",
    egg: "purple"
};

function App() {
  const [keys, setKeys] = useState(allKeys);
  return(
    <React.Fragment>
      <h2>Stacked Bar Chart with D3</h2>
      <StackedBarChart data={data} keys={keys} colors={colors} />

    <div className="fields">
      {allKeys.map(key => (
        <div key={key} className="field">
        <input
          id={key}
          type="checkbox"
          checked={keys.includes(key)}
          onChange={e => {
            if (e.target.checked) {
              setKeys(Array.from(new Set([...keys, key])));
            } else {
              setKeys(keys.filter(_key => _key !== key));
            }
          }}
        />
        <label for={key} style={{ color: colors[key] }}>
            {key}
        </label>
      </div>
      ))}
      </div>
    </React.Fragment>
  );
}

export default App;
