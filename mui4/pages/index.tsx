import * as React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../src/AppBar';
import Grid from '@material-ui/core/Grid';
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepContent from "@material-ui/core/StepContent";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    grid: {
      padding: "0px 12px 12px 12px",
    },
    stepper: {
      padding: "0px 12px 12px 12px"
    },
  })
);

export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <AppBar />
      <Grid container className={classes.grid}>
        <Grid item xs={12} sm={8}>
          <Stepper
            activeStep={0}
            orientation="vertical"
            className={classes.stepper}
            nonLinear
          >
            <Step key={0}>
              <StepButton>
                <StepLabel>Lorem</StepLabel>
              </StepButton>
              <StepContent>Lorem</StepContent>
            </Step>
          </Stepper>
        </Grid>
      </Grid>
    </Container>
  );
}
