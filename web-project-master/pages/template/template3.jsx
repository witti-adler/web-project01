import React from "react";
import TemplateWithStore from "../../components/templateTest/TemplateWithStore";
import TemplateWithoutStore from "../../components/templateTest/TemplateWithoutStore";

const Template3 = () => {
  return (
    <>
      <TemplateWithStore>
        <TemplateWithStore />
        <TemplateWithoutStore />
      </TemplateWithStore>
    </>
  );
};

export default Template3;
