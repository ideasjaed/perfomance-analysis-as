import { Box, Typography, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChartPrices from "./ChartPrices";
import ChartPresenceShare from "./ChartPresenceShare";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Analysis = () => {
  return (
    <>
      <Box className="containerAnalysis">
        <Typography className="title">General Performance Analysis</Typography>
      </Box>
      <Box className="containerAnalysis">
        <Grid container spacing={2}>
          <Grid item md={8} xs={7}>
            <p className="subtitle">Price Evolution</p>
            <Item className="graphPrice">
              <ChartPrices />
            </Item>
          </Grid>
          <Grid item md={4} xs={5}>
            <p className="subtitle">Presence Share by Product</p>
            <Item className="graphPrice">
              <ChartPresenceShare />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Analysis;
