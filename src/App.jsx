import { useState } from "react";
import generateRandomJSON from "./generateRandomJSON";
import "./App.css";
import Card from "./card";

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
              <Card key={index} jsonData={dict} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
