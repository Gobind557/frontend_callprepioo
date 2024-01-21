import  { useState } from "react";
import generateRandomJSON from "./generateRandomJSON";
import "./App.css";
import CollapseArrow from "./CollapseArrow";
import JsonRenderer from "./JsonRenderer";

function App() {
  const [jsonData, setJsonData] = useState([]);

  const generateJSON = () => {
    const newJSON = generateRandomJSON();
    setJsonData(newJSON);
  };

  return (
    <div className="app-container">
      <textarea
        className="json-display"
        value={JSON.stringify(jsonData)}
        readOnly
        rows={10}
      />
      <button className="generate-button" onClick={generateJSON}>
        Generate New JSON
      </button>

      <div className="cards-container">
        {jsonData.length > 0 && (
          <>
            {jsonData.map((dict, index) => (
              <div key={index}>
                <CollapseArrow fallback={"{...}"}>
                  <JsonRenderer json={dict} />
                </CollapseArrow>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
