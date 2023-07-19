import React from "react";
import useStore from "@/store/store";
const WithData = (Component) => {
  const WithDataComponent = () => {
    const getNumber = useStore((state) => state.number);
    return <Component data={getNumber} />;
  };
  return WithDataComponent;
};

export default WithData;
