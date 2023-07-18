import React, { useEffect } from "react";
import { Box } from "@mui/material";
import useStore from "@/store/store";
import ZustandBoxChild from "./ZustandBoxChild";

const NotUsingZSBOX = (props) => {
  const { data } = props;
  console.log(`NotUsingZSBOX`);
  return (
    <>
      <Box>
        <h1>notUsingZSBox number is {data}</h1>
      </Box>

      <Box>test</Box>
      <Box>test</Box>
      <Box>test</Box>
      {/* <ZustandBoxChild></ZustandBoxChild> */}
    </>
  );
};

export default NotUsingZSBOX;
