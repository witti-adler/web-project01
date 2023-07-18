import React from "react";
import TemplateWithStore from "../../components/templateTest/TemplateWithStore";
import TemplateWithoutStore from "../../components/templateTest/TemplateWithoutStore";

//*  --B (store)
//*  --X

const Template1 = () => {
  return (
    <>
      <TemplateWithStore></TemplateWithStore>
      <TemplateWithoutStore></TemplateWithoutStore>
    </>
  );
};

export default Template1;
