import  { useState } from "react";
import PropTypes from "prop-types";
// Assuming these symbols are defined elsewhere
const DOWN_ARROW = "▼";
const RIGHT_ARROW = "▶";

function CollapseArrow({ children, fallback }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? DOWN_ARROW : RIGHT_ARROW} {!isOpen && fallback}
      </button>
      <div style={{ display: isOpen ? "initial" : "none" }}>{children}</div>
    </>
  );
}
CollapseArrow.propTypes = {
  children: PropTypes.node.isRequired,
  // ...other props
};
CollapseArrow.propTypes = {
  fallback: PropTypes.node.isRequired,
  // ...other props
};

export default CollapseArrow;
