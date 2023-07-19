import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useStore from "@/store/store";
import ZustandBox from "@/components/Zustand/ZustandBox";
import ZustandBoxChild from "@/components/Zustand/ZustandBoxChild";
import NotUsingZSBox from "@/components/Zustand/NotUsingZSBOX";
const Acumulator = (props) => {
  const getNumber = useStore((state) => state.number);
  const increaseNumber = useStore((state) => state.increaseNumber);
  const removeNumber = useStore((state) => state.removeNumber);

  const { data } = props;
  console.log(`Zustand`);

  return (
    <>
      <Box>
        <Box>
          <h1>this is number {getNumber}</h1>
        </Box>
        <Box>
          <Button onClick={increaseNumber}>click to add here</Button>
        </Box>
        <Box>
          <Button onClick={removeNumber}>click to ReSet number here</Button>
        </Box>
      </Box>
      <ZustandBox></ZustandBox>
      {/* <ZustandBoxChild></ZustandBoxChild> */}

      {/* <ZustandBoxChild data={getNumber}></ZustandBoxChild> */}
      {/* <NotUsingZSBox data={data}></NotUsingZSBox> */}
    </>
  );
};

export default Acumulator;
