import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useStore from "@/store/store";
import ZustandBox from "@/components/Zustand/ZustandBox";
import Acumulator from "./acumulator";

const BigBox = () => {
  const getNumber = useStore((state) => state.number);
  const increaseNumber = useStore((state) => state.increaseNumber);
  const removeNumber = useStore((state) => state.removeNumber);
  return (
    <>
      <Acumulator data={getNumber}></Acumulator>
      <ZustandBox></ZustandBox>
    </>
  );
};

export default BigBox;
