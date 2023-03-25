import React, { useState } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
import { images } from "../images";

const filters = ["All", "Websites", "Flayers", "Business Cards"];

const Portfolio = () => {
  const [selected, setSelected] = useState("All");

  const filteredImages = images.filter((el) =>
    selected === "All" ? el : el.category === selected
  );

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={setSelected}
      />
      <ProjectList filteredImages={filteredImages} />
    </div>
  );
};

export default Portfolio;
