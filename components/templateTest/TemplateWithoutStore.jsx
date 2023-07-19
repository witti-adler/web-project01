import React, { useEffect } from "react";
import { Box } from "@mui/material";

const TemplateWithoutStore = (props) => {
  console.log(`TemplateWithoutStore`);
  return (
    <>
      <Box>
        TemplateWithoutStore---------------------------------------------TemplateWithoutStore
      </Box>

      <Box>
        <h1>TemplateWithoutStore</h1>
      </Box>

      {props.children}
      <Box>
        TemplateWithoutStore---------------------------------------------TemplateWithoutStore
      </Box>
    </>
  );
};

export default TemplateWithoutStore;
