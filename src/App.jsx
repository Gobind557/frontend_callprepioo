
import { useState, useEffect } from "react";
import JsonRenderer from "./components/JsonRenderer";
import generateRandomJSON from "./utils/generateRandomJSON";

function App() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Initially sets the data to a random value
    setJsonData(generateRandomJSON());
  }, []);

  // User initiated request
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

      <div className="button-wrapper">
        <button className="generate-button" onClick={generateJSON}>
          Generate New JSON
        </button>
      </div>

      <div className="cards-container">
        {jsonData.length > 0 &&
          jsonData.map((data) => (
            <>
              <pre>
                <JsonRenderer json={data} />
              </pre>
            </>
          ))}
      </div>
    </div>
  );
}

export default App;
