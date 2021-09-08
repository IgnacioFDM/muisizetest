import * as React from 'react';
import Container from '@mui/material/Container';
import AppBar from '../src/AppBar';
import Grid from '@mui/material/Grid';
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <AppBar />
      <Grid container sx={{ padding: "0px 12px 12px 12px" }}>
        <Grid item xs={12} sm={8}>
          <Stepper
            activeStep={0}
            orientation="vertical"
            sx={{ padding: "0px 12px 12px 12px" }}
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
