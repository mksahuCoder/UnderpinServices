import React from "react";
import Button from "react-bootstrap/Button";

const SubmitButton = ({ buttonName }) => {
  return (
    <Button
      type="submit"
      style={{
        width: "100%",
        backgroundColor: "maroon",
        border: "none",
        fontWeight: "bold",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "green")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "maroon")}
    >
      {buttonName}
    </Button>
  );
};

export default SubmitButton;
