import React, { useEffect } from "react";
import { Box } from "@mui/material";
import useStore from "@/store/store";
import ZustandBoxChild from "./ZustandBoxChild";

const ZustandBox = (props) => {
  // const { data } = props;
  const getNumber = useStore((state) => state.number * 2);

  console.log(`ZustandBox`);

  return (
    <>
      <Box>
        <h1>ZustandBox number is {getNumber}</h1>
      </Box>
      <Box>test</Box>
      <Box>test</Box>
      <Box>test</Box>
      {/* <ZustandBoxChild></ZustandBoxChild> */}
    </>
  );
};

export default ZustandBox;
