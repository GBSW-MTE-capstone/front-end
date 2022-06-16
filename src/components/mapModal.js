import React from "react";

const MapModal = ({ x, y, name }) => {
  return (
    <div
      className="mapmodal"
      style={{
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      {name}
      <p>sadf</p>
      <div />
    </div>
  );
};
export default MapModal;
