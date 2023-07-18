import React, { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Router from "next/router";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useStore from "@/store/store";
const stylesss = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
// const buttonCoreStyle = { backgroundColor: "red" };
const LoginForm = () => {
  const setUsername = useStore((state) => state.setUsername);
  const [inputValue01, setInputValue01] = useState("");
  const [inputValue02, setInputValue02] = useState("");

  const goToUser = () => {
    // setUsername({ username: inputValue01 });
    Router.push({
      pathname: "/user",
      // query: {
      //   value01: inputValue01,
      //   value02: inputValue02,
      // },
    });

    // console.log(setUserInfo);
    // setUserInfo({ inputValue01, inputValue02 });
  };
  // useEffect(() => {
  //   setUsername({ inputValue01 });
  // }, [inputValue01]);
  return (
    <>
      <Box sx={stylesss}>
        <Box
          sx={{
            width: 300,
            height: 300,
          }}
        >
          <Grid
            container
            spacing={3}
            direction={"column"}
            alignItems={"center"}
          >
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                size="small"
                variant="outlined"
                value={inputValue01}
                onChange={(e) => {
                  setInputValue01(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                size="small"
                variant="outlined"
                value={inputValue02}
                onChange={(e) => {
                  setInputValue02(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              width: 300,
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onClick={goToUser}>login</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
