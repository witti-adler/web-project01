import React from "react";
import TemplateWithStore from "../../components/templateTest/TemplateWithStore";
import TemplateWithoutStore from "../../components/templateTest/TemplateWithoutStore";

const Template2 = () => {
  return (
    <>
      <TemplateWithStore>
        <TemplateWithoutStore />
      </TemplateWithStore>
    </>
  );
};

export default Template2;
