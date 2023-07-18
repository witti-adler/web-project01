import React from "react";
import TemplateWithStore from "../../components/templateTest/TemplateWithStore";
import TemplateWithoutStore from "../../components/templateTest/TemplateWithoutStore";

const Template4 = () => {
  return (
    <>
      <TemplateWithStore>
        <TemplateWithoutStore></TemplateWithoutStore>
      </TemplateWithStore>

      <TemplateWithoutStore></TemplateWithoutStore>
    </>
  );
};

export default Template4;
