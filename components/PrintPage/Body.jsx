import React from "react";
import Box from "@mui/material/Box";
import CardItem from "../CardItem";

const Body = () => {
  const data = [
    { title: "X1", subtitle: "XX1", value: "Y1" },
    { title: "X2", subtitle: "XX2", value: "Y2" },
    { title: "X3", subtitle: "XX3", value: "Y3" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
    { title: "X4", subtitle: "XX4", value: "Y4" },
  ];
  let CardItems = data?.map((item) => <CardItem Data={item}></CardItem>) || [];

  return (
    <>
      <Box
        sx={{
          "@media print": {
            position: "absolute",
            paddingTop:
              "50px" /* Adjust this value according to the size of your header */,
            paddingBottom:
              "50px" /* Adjust this value according to the size of your footer */,
            pageBreakAfter: "always",
          },
        }}
      >
        {CardItems}
      </Box>
    </>
  );
};

export default Body;
