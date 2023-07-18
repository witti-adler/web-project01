import React from "react";
import TemplateWithStore from "../../components/templateTest/TemplateWithStore";
import TemplateWithoutStore from "../../components/templateTest/TemplateWithoutStore";

const Template5 = () => {
  return (
    <>
      <TemplateWithStore>
        <TemplateWithoutStore></TemplateWithoutStore>
      </TemplateWithStore>

      <TemplateWithStore></TemplateWithStore>
    </>
  );
};

export default Template5;
