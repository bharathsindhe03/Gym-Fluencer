import "./Animation.css";
import React from "react";
export default function Animation() {
  return (
    <div style={styles.container}>
      <div className="loader"></div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#f0f0f0", // Optional background color
  },
};
