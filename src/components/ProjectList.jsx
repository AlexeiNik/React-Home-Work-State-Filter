import React from "react";

const ProjectList = ({ filteredImages }) => {
  return (
    <div className="project_list">
      {filteredImages.map((el, id) => {
        return (
          <div key={el.img + id}>
            <img src={el.img} width={"250px"} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
