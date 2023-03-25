import React from "react";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter, id) => (
        <button
          onClick={() => onSelectFilter(filter)}
          style={{
            backgroundColor: selected === filter ? "white" : undefined,
            color: selected === filter ? "black" : undefined,
          }}
          key={id}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
