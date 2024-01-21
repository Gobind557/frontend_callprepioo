import React from "react";
import PropTypes from "prop-types";
import './App.css'; // Adjust the path if needed

const Card = ({ jsonData }) => {
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const createIndentation = (level) => {
    return Array(level + 1)
      
      .join("");
  };

  const renderJSON = (data, level = 0) => {
    return (
      <div key={level}>
        {level > 0 && <span>{createIndentation(level - 1)}</span>}
        {typeof data === "object" && !Array.isArray(data) ? (
          <details open={!isCollapsed}>
            <summary onClick={handleToggle}>{"{"}</summary>
            <div style={{ marginLeft: `${level * 20}px` }}>
              {Object.entries(data).map(([key, value]) => (
                <div key={key}>
                  {key}: {renderJSON(value, level + 1)}
                </div>
              ))}
            </div>
            <summary onClick={handleToggle}>{"}"}</summary>
          </details>
        ) : Array.isArray(data) ? (
          <details open={!isCollapsed}>
            <summary onClick={handleToggle}>{"["}</summary>
            <div style={{ marginLeft: `${level * 20}px` }}>
              {data.map((item, index) => (
                <div key={index}>{renderJSON(item, level + 1)}</div>
              ))}
            </div>
            <summary onClick={handleToggle}>{"]"}</summary>
          </details>
        ) : (
          <span>{JSON.stringify(data)}</span>
        )}
      </div>
    );
  };

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div className="card">
      <div className="card-header">JSON Data</div>
      <div className="card-body">{renderJSON(jsonData)}</div>
    </div>
  );
};
Card.propTypes = {
  jsonData: PropTypes.object.isRequired,
};


export default Card;
