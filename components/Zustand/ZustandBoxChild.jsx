import React, { useEffect } from "react";
import { Box } from "@mui/material";
import useStore from "@/store/store";
const ZustandBoxChild = (props) => {
  const getNumber = useStore((state) => state.number * 2);

  useEffect(() => {
    console.log(`ZustandBoxChild`);
  }, []);
  return (
    <>
      <Box>
        <h1>ZustandBoxChild number is {getNumber}</h1>
      </Box>
      <Box>test</Box>
      <Box>test</Box>
      <Box>test</Box>
      <Box>test</Box>
    </>
  );
};

export default ZustandBoxChild;
