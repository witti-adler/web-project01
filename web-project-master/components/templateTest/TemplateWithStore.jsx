import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import useStore from "@/store/store";

const TemplateWithStore = (props) => {
  const number = useStore((state) => state.number * 2);
  const increaseNumber = useStore((state) => state.increaseNumber);
  const removeNumber = useStore((state) => state.removeNumber);
  console.log(`TemplateWithStore`);

  return (
    <>
      <Box>
        TemplateWithStore---------------------------------------------TemplateWithStore
      </Box>
      <Box>
        <h1>TemplateWithStore number is {number}</h1>
      </Box>
      <Button onClick={increaseNumber}>click to add </Button>

      {props.children}

      <Box>
        TemplateWithStore---------------------------------------------TemplateWithStore
      </Box>
    </>
  );
};

export default TemplateWithStore;
