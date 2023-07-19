import React, { useEffect, useState } from "react";
import Progress from "@/components/Progress";
import CardItem from "@/components/CardItem";
import Grid from "@mui/material/Grid";

export default function MyCard(props) {
  const { Data } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  let CardItems = Data?.map((item, index) => (
    <Grid item md={6} xs={12} key={index}>
      <CardItem Data={item}></CardItem>
    </Grid>
  ));

  return (
    <>
      <div style={{ padding: 20 }}>
        {/* {loading ? <Progress /> : <Grid container spacing={2}> {CardItems}</Grid >} */}

        {loading ? (
          <Progress />
        ) : (
          <Grid container spacing={2}>
            {Data?.map((item, index) => (
              <Grid item md={6} xs={12} key={index}>
                <CardItem Data={item}></CardItem>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
}
