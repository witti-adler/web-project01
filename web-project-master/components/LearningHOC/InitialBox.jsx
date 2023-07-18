import React from "react";
import Box from "@mui/material/Box";
import useStore from "@/store/store";
import { Button } from "@mui/material";
import WithData from "./wtihData";
const InitialBox = ({ data }) => {
  const getNumber = useStore((state) => state.number);
  const increaseNumber = useStore((state) => state.increaseNumber);
  const removeNumber = useStore((state) => state.removeNumber);
  return (
    <>
      <Box>
        <h1>Box number is {getNumber}</h1>
        {data}
        <Button onClick={increaseNumber}>click to add here</Button>
      </Box>
      <Box> test </Box>
    </>
  );
};

export default WithData(InitialBox);
